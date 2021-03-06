
import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import Dialog from './dialog';
import { connect } from 'react-redux';
import Page from './page';
import SelectProfession from './../professions/selectProfession';
import SelectSpecialization from './../professions/specialization';
import BuyProfessionSkills from './../professions/buyProfessionSkills';

/**
 * 
 */
class ProfessionsDialog extends Component {

    render() {
        const { newCharacter } = this.props;
        const { professionsDialogShown, index } = this.props.dialog;
        return (
            <Dialog show={professionsDialogShown} title="Professions Dialog">
                <Page show={index === 0}><SelectProfession /></Page>
                <Page show={index === 1}><SelectSpecialization /></Page>
                <Page show={index === 2}><BuyProfessionSkills newCharacter={newCharacter} source="profession" /></Page>
            </Dialog>
        );
    }
}

const __ProfessionsDialog = connect(s => s)(ProfessionsDialog);

export default __ProfessionsDialog;


