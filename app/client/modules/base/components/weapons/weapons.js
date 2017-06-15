
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './../container/container';
import EditWeapons from './editWeapons';

/**
 * This is the basic description of the Weapons component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Weapons extends Component {

    render() {
        const { weapons } = this.props.character;
        const pages = [
            { title: "Edit weapons", content: <EditWeapons /> }
        ]

        return (
            <Container className="weapons" title="Weapons" pages={pages}>
                {
                    weapons.map((weapon, i) => {
                        return (
                            <div className={"row" + (weapon.isActive ? ' selected' : '')} key={i}>
                                <b>{weapon.title}:</b>
                                <span>{weapon.isRanged ? '(R)' : ''}</span>
                                <span>skill</span><span>1d20+{weapon.skill || 0};</span>
                                <span>dmg</span><span>
                                    {weapon.numberOfDice || 0}d{weapon.diceSides || 0}+{weapon.dmgTotal || 0}; {weapon.description}
                                </span>
                            </div>
                        );
                    })
                }
            </Container>
        );
    }
}

export default Weapons;

