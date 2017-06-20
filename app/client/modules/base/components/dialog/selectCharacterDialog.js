
import React, { Component } from 'react';
import Dialog from './dialog';
import { connect } from 'react-redux';
import Page from './page';
import firebase from 'firebase';

/**
 * 
 */
class RaceDialog extends Component {

    render() {
        const { selectCharacter, newCharacter } = this.props;
        const { selectCharacterDialogShown } = this.props.dialog;
        const characters = this.props.characters || [];

        const __selectCharacter = (character) => {
            return () => {
                const { email } = firebase.auth().currentUser;
                const __email = email.replace('.', '&dot&');
                const charactersRef = firebase
                    .database()
                    .ref('/user-characters/' + __email + '/')
                    .orderByChild("id")
                    .equalTo(character.id)
                    .once('value')
                    .then(snapshot => {
                        const values = snapshot.val();
                        let c = values[character.id];

                        /* Because Firebase removes empty objects and ampty arrays we'll need to supply these */
                        c.languages = c.languages || [];
                        c.spells = c.spells || [];

                        selectCharacter(c);
                    });


            }
        }

        return (
            <Dialog show={selectCharacterDialogShown} title="Race Dialog">
                <Page show={true}>
                    {
                        characters.length > 0 ?
                            <div>
                                {
                                    characters.map((c, i) => (
                                        <div key={i}
                                            className={"tile" + ((newCharacter && newCharacter.name === c.name) ? ' selected' : '')}
                                            onClick={__selectCharacter(c)}>
                                            <span>{c.name}</span>
                                        </div>
                                    ))
                                }
                            </div> :
                            <div>You have no characters</div>
                    }
                </Page>
            </Dialog>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        selectCharacter: (character) => {
            dispatcher({ type: "SELECT_CHARACTER", payload: character });
        }
    }
}
const __RaceDialog = connect(mapStateToProps, mapDispatcherToProps)(RaceDialog);

export default __RaceDialog;


