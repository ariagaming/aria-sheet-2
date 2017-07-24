
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './../container/container';
import EditWeapons from './editWeapons';
import { connect } from 'react-redux';

/**
 * This is the basic description of the Weapons component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Weapons extends Component {

    render() {
        const { selectWeapon, updateCharacter, character } = this.props;
        const { weapons } = character;
        const pages = [
            { title: "Edit weapons", content: <EditWeapons /> }
        ]
        const __selectWeapon = (weapon) => {
            return () => {
                selectWeapon(weapon);
                setTimeout(() => {
                    updateCharacter();
                });
            }
        }

        return (
            <Container className="weapons" title="Weapons" pages={pages}>
                {
                    weapons.map((weapon, i) => {
                        const __className = (weapon.isShield ? 'accent' : '');
                        return (
                            <div className={"row" + (weapon.isActive ? ` selected ${__className}` : '')} key={i} onClick={__selectWeapon(weapon)}>
                                <b>{weapon.title}:</b>
                                <span>{weapon.isRanged ? '(R)' : ''}</span>

                                {
                                    weapon.isShield ?
                                        <span></span> :
                                        <wrapper>
                                            <span>skill</span><span>1d20+{weapon.skill || 0};</span>
                                            <span>dmg</span>
                                            <span>
                                                {weapon.numberOfDice || 0}d{weapon.diceSides || 0}+{weapon.dmgTotal || 0};
                                            </span>
                                            <span>initiative:</span>
                                            <span>{weapon.initiativeTotal || 10};</span>
                                        </wrapper>
                                }
                                <span>{weapon.description}</span>
                            </div>
                        );
                    })
                }
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        selectWeapon: (weapon) => {
            dispatcher({
                type: 'SET_ACTIVE_WEAPON',
                payload: weapon
            })
        },
        updateCharacter: () => {
            dispatcher({
                type: "UPDATE_CHARACTER"
            })
        }
    }
}
const __Weapons = connect(mapStateToProps, mapDispatcherToProps)(Weapons);

export default __Weapons;

