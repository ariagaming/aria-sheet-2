
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * A Description
 */
export default class Description extends Component {
    render() {
        const { newCharacter } = this.props;
        if (!newCharacter) return null;

        if (!newCharacter.race.stats) {
            return (
                <div>No selected race</div>
            );
        }
        else {
            return (
                <div>
                    <div>STR: {newCharacter.race.stats.STR}</div>
                    <div>AGI: {newCharacter.race.stats.AGI}</div>
                    <div>INU: {newCharacter.race.stats.INU}</div>
                    <div>PER: {newCharacter.race.stats.PER}</div>
                </div>
            );
        }
    }
}


