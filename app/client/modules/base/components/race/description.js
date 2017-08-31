
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
                    <div>Strength (STR): {newCharacter.race.stats.STR}</div>
                    <div>Agility (AGI): {newCharacter.race.stats.AGI}</div>
                    <div>Intuition (INU): {newCharacter.race.stats.INU}</div>
                    <div>Perception (PER): {newCharacter.race.stats.PER}</div>
                </div>
            );
        }
    }
}


