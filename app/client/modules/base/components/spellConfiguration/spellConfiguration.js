
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the SpellConfiguration component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class SpellConfiguration extends Component {
    render() {
        const { newCharacter, source, selectChoice } = this.props;
        if (!newCharacter || newCharacter.classes[0].title === "Unknown") return null;


        let spells = [];
        Object
            .keys(newCharacter.spells)
            .map(s => newCharacter.spells[s])
            .forEach(s => {
                spells = spells.concat(s.spells);
            });

        const __selectChoice = (spellIndex, choiceIndex) => {
            return () => {
                selectChoice(spellIndex, choiceIndex);
            }
        }

        if (!spells || spells.length === 0) {
            return (
                <div>Nothing to see</div>
            )
        }
        else {

            return (
                <div>
                    <h2>Configure Spells</h2>
                    {
                        spells.map((spell, i) => {

                            if (spell.choices) {
                                return (
                                    <div key={i}>
                                        <div className="row choices">
                                            <div className="choice">{spell.level}</div>
                                            {
                                                spell.choices.map((choice, j) => {
                                                    return (
                                                        <div className={"choice" + (choice.selected ? " selected" : "")}
                                                            key={j}
                                                            onClick={__selectChoice(i, j)}>

                                                            <span className="title">{choice.title}:</span>
                                                            <span>{choice.description}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="row" key={i}>
                                        <span className="title">{spell.title}</span>
                                        <span>{spell.description}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            );
        }
    }
}



const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        selectChoice: (spellIndex, choiceIndex) => {
            dispatcher({
                type: 'SELECT_SPELL_CHOICE',
                payload: {
                    spellIndex, choiceIndex
                }
            });
        }
    }
}
const __SpellConfiguration = connect(mapStateToProps, mapDispatcherToProps)(SpellConfiguration);

export default __SpellConfiguration;


