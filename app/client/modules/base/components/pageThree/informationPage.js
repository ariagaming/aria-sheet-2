
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * 
 */
class CharacterInformationPage extends Component {

    render() {
        const { newCharacter, changeCharacterInformation } = this.props;
        if (!newCharacter) return null;

        return (
            <div title="Information Page">
                <textarea onChange={changeCharacterInformation}>{newCharacter.information}</textarea>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        changeCharacterInformation: (event) => {
            dispatcher({
                type: 'CHANGE_CHARACTER_INFORMATION',
                payload: event.target.value
            });
        }
    }
}
const __CharacterInformationPage = connect(mapStateToProps, mapDispatcherToProps)(CharacterInformationPage);

export default __CharacterInformationPage;
