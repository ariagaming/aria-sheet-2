import React from 'react';
import { render } from 'react-dom';
import Login from './../../../base/components/login/login';
import Page from './../../../base/components/page/page';
import PageOne from './../../../base/components/pageOne/pageOne';
import PageTwo from './../../../base/components/pageTwo/pageTwo';
import PageThree from './../../../base/components/pageThree/pageThree';
import PageContainer from './../../../base/components/pageContainer/pageContainer';
import Dialog from './../../../base/components/dialog/dialog';
import RaceDialog from './../../../base/components/dialog/raceDialog';
import ProfessionsDialog from './../../../base/components/dialog/professionsDialog';
import ArmorDialog from './../../../base/components/dialog/armorDialog';
import SelectCharacterDialog from './../../../base/components/dialog/selectCharacterDialog';

/* SOME PLUMBING TO GET THE THEMES WORKING */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// inject the tap event
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { connect } from 'react-redux';

import MuiDialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import firebase from 'firebase';


/**
 * The app
 */
class App extends React.Component {

    componentWillMount() {
        const { setUser, setCharacters } = this.props;
        const auth = firebase.auth();
        auth.onAuthStateChanged(firebaseUser => {
            // set the user
            setUser(firebaseUser);

            // after we're logged in we need to listen to the characters list
            const charactersRef = firebase
                .database()
                .ref('/characters/')
                .orderByChild("user")
                .equalTo(firebaseUser.email);

            charactersRef.on('value', (snapshot) => {
                const values = snapshot.val();
                if (values === null) return;
                setCharacters(Object.keys(values).map(key => values[key]));
            });
        });


    }

    render() {
        const { user, dialog, closeDefaultDialog, showSelectCharacterDialog } = this.props;
        const signOut = () => {
            const auth = firebase.auth();
            auth.signOut();
        }

        if (!user) {
            return (
                <MuiThemeProvider>
                    <Login />
                </MuiThemeProvider>
            );
        }
        else {

            const shown = this.props.dialog.shown || this.props.dialog.raceDialogShown;
            const resetCharacter = () => {
                localStorage.clear();
                window.location = window.location;
            }

            return (
                <MuiThemeProvider>
                    <div className={shown ? "root noscroll" : "root"}>

                        <PageContainer>
                            <PageOne />
                            <PageTwo />
                            <PageThree />
                        </PageContainer>

                        <Dialog pages={[]} show={shown} />
                        <RaceDialog />
                        <ProfessionsDialog />
                        <ArmorDialog />
                        <SelectCharacterDialog />


                        <div className="actions">
                            <div className="action" onClick={this.props.saveCharacter}>
                                <i className="fa fa-save"></i>
                                <label>Save</label>
                            </div>
                            <div className="action" onClick={resetCharacter}>
                                <i className="fa fa-times"></i>
                                <label>Reset Character</label>
                            </div>
                            <div className="action" onClick={signOut}>
                                <i className="fa fa-sign-out"></i>
                                <label>Sign Out</label>
                            </div>
                            <div className="action" onClick={showSelectCharacterDialog}>
                                <i className="fa fa-users"></i>
                                <label>Characters</label>
                            </div>
                        </div>

                        <MuiDialog
                            title={dialog.title}
                            modal={true}
                            actions={[
                                <FlatButton label="OK" primary={true} onTouchTap={closeDefaultDialog} />
                            ]}
                            open={dialog.showDialog || false}>
                            {dialog.description}
                        </MuiDialog>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapReducerToProps = (dispatch) => {
    return {
        saveCharacter: () => {
            dispatch({ type: "SAVE_CHARACTER" });
        },
        setUser: (user) => {
            dispatch({ type: 'SET_USER', payload: user });
        },
        setCharacters: (characters) => {
            dispatch({ type: 'SET_CHARACTERS', payload: characters });
        },
        closeDefaultDialog: () => {
            dispatch({ type: "CLOSE_DEFAULT_DIALOG" });
        },
        showSelectCharacterDialog: () => {
            dispatch({ type: "SHOW_SELECT_CHARACTER_DIALOG" });
        }
    }
}

const __App = connect(mapStateToProps, mapReducerToProps)(App);

export default __App;