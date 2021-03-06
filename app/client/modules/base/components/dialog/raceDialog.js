
import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import Dialog from './dialog';
import { connect } from 'react-redux';
import Page from './page';
import SelectRace from './../race/selectRace';
import Description from './../race/description';
import BuyRaceSkills from './../race/buyRaceSkills';

/**
 * 
 */
class RaceDialog extends Component {

    render() {
        const { newCharacter } = this.props;
        const { raceDialogShown, index } = this.props.dialog;
        return (
            <Dialog show={raceDialogShown} title="Race Dialog">
                <Page show={index === 0}><SelectRace /></Page>
                <Page show={index === 1}><Description newCharacter={newCharacter} /></Page>
                <Page show={index === 2}><BuyRaceSkills newCharacter={newCharacter} source="race" /></Page>
            </Dialog>
        );
    }
}

const __RaceDialog = connect(s => s)(RaceDialog);

export default __RaceDialog;


