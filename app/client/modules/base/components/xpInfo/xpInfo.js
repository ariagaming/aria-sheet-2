
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the XpInfo component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class XpInfo extends Component {
    render() {
        const { character, changeCharacterXP } = this.props;
        const __changeXP = event => {
            changeCharacterXP(+event.target.value);
        }

        return (
            <div className="xp-info">
                {character.XP.filled} / <input value={character.XP.source} onChange={__changeXP} />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCharacterXP: (xp) => {
            dispatch({ type: 'SET_CHARACTER_XP', payload: xp });
            setTimeout(() => {
                dispatch({ type: "UPDATE_CHARACTER" });
            });
        }
    }
}
const __XpInfo = connect(mapStateToProps, mapDispatchToProps)(XpInfo);

export default __XpInfo;

