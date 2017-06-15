import React from 'react';
import { render } from 'react-dom';
import Page from './../../../base/components/page/page';
import PageOne from './../../../base/components/pageOne/pageOne';
import PageThree from './../../../base/components/pageThree/pageThree';
import PageContainer from './../../../base/components/pageContainer/pageContainer';
import Dialog from './../../../base/components/dialog/dialog';
import RaceDialog from './../../../base/components/dialog/raceDialog';
import ProfessionsDialog from './../../../base/components/dialog/professionsDialog';
import ArmorDialog from './../../../base/components/dialog/armorDialog';
import { connect } from 'react-redux';


/**
 * The app
 */
class App extends React.Component {
    render() {
        const shown = this.props.dialog.shown || this.props.dialog.raceDialogShown;
        const resetCharacter = () => {
            localStorage.clear();
            window.location = window.location;
        }

        return (
            <div className={shown ? "root noscroll" : "root"}>

                <PageContainer>
                    <PageOne />
                    <Page />
                    <PageThree />
                </PageContainer>

                <Dialog pages={[]} show={shown} />
                <RaceDialog />
                <ProfessionsDialog />
                <ArmorDialog />


                <div className="actions">
                    <div className="action" onClick={this.props.saveCharacter}>
                        <i className="fa fa-save"></i>
                    </div>
                    <div className="action" onClick={resetCharacter}>
                        <i className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapReducerToProps = (dispatch) => {
    return {
        saveCharacter: () => {
            dispatch({ type: "SAVE_CHARACTER" });
        }
    }
}

const __App = connect(mapStateToProps, mapReducerToProps)(App);

export default __App;