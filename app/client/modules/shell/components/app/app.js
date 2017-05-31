import React from 'react';
import { render } from 'react-dom';
import Page from './../../../base/components/page/page';
import PageOne from './../../../base/components/pageOne/pageOne';
import PageContainer from './../../../base/components/pageContainer/pageContainer';
import Dialog from './../../../base/components/dialog/dialog';
import RaceDialog from './../../../base/components/dialog/raceDialog';
import { connect } from 'react-redux';

/**
 * The app
 */
class App extends React.Component {
    render() {
        const shown = this.props.dialog.shown || this.props.dialog.raceDialogShown;
        return (
            <div className={shown ? "root noscroll" : "root"}>

                <PageContainer>
                    <PageOne />
                    <Page />
                    <Page />
                </PageContainer>

                <Dialog pages={[]} show={shown} />
                <RaceDialog />

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}

const __App = connect(mapStateToProps)(App);

export default __App;