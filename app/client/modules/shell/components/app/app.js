import React from 'react';
import { render } from 'react-dom';
import Page from './../../../base/components/page/page';
import PageOne from './../../../base/components/pageOne/pageOne';
import PageContainer from './../../../base/components/pageContainer/pageContainer';
import Dialog from './../../../base/components/dialog/dialog';
import { connect } from 'react-redux';

/**
 * The app
 */
class App extends React.Component {
    render() {
        const { shown } = this.props.dialog;
        return (
            <div>

                <PageContainer>
                    <PageOne />
                    <Page />
                    <Page />
                </PageContainer>

                <Dialog pages={[]} show={shown} />

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}

const __App = connect(mapStateToProps)(App);

export default __App;