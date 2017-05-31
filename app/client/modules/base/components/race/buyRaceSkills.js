

import React, { Component } from 'react';
import skillDot from './../other/skillDot';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';

/**
 * Edit Professions
 */
class BuyRaceSkills extends Component {
    render() {
        const { newCharacter, source, buy } = this.props;
        if (!newCharacter) return null;

        const max = newCharacter.race.skillPoints + (newCharacter.race.skills || []).length;
        const list = newCharacter.skills;
        const remaining = list.reduce((acc, l) => {
            let total = 0;
            if (l.bought === source) {
                total++;
            }
            if (l.expertise === source) {
                total++;
            }
            return acc - total;
        }, max);

        const buyItem = (prop, buyable, source) => {
            return () => {
                /* 
                You can only buy a skill if you have a remaining maximum number of skills for that skill type (for example, "race").
                If you do not give a prop 'max' you can keep buying.
                 */
                if (!max || remaining > 0 || buyable.bought === source || buyable.expertise === source) {
                    buy(prop, buyable, source, max);
                }
            }
        }

        return (
            <div>
                <h2>Remaining: {remaining}</h2>
                {
                    list.map((buyable, i) => {
                        const { bought, expertise, title } = buyable;
                        return (
                            <div key={i} className="row" onClick={buyItem("skills", buyable, source, max)}>
                                {skillDot(bought)}
                                {skillDot(expertise)}
                                <span className="title"> {title}</span>
                            </div>
                        )
                    })
                }
            </div >
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        buy: (prop, buyable, source, max) => {
            dispatcher({
                type: 'BUY',
                payload: {
                    prop,
                    buyable,
                    source,
                    max
                }
            });
        }
    }
}
const __BuyRaceSkills = connect(mapStateToProps, mapDispatcherToProps)(BuyRaceSkills);

export default __BuyRaceSkills;