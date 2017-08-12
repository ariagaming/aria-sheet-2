
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';


/**
 * This is the basic description of the SpellConfiguration component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class SpellConfiguration extends Component {

    renderChoice(spell, index, category) {
        const __selectChoice = (choiceIndex) => {
            return () => {
                this.props.selectChoice(index, choiceIndex, category);
            }
        }
        return (
            <div className="choices" key={index}>
                <span>{spell.level || spell.rank}</span>
                {
                    spell.choices.map((choice, i) => {
                        return (
                            <div className={"choice" + (choice.selected ? " selected" : "")} key={i} onClick={__selectChoice(i)}>
                                <span className="title">{choice.title}</span>
                                <span>{choice.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderNormalSpell(category, index) {
        const { increaseSpellRank, decreaseSpellRank } = this.props;
        const __increaseSpellRank = (spell) => {
            return () => {
                increaseSpellRank(spell, category);
            }
        };
        const __decreaseSpellRank = (spell) => {
            return () => {
                decreaseSpellRank(spell, category);
            }
        };


        return (
            <table className="table" key={index}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Title</th>
                        <th>Desciption</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.spells.map((spell, i) => {
                            return (
                                <tr key={i} className="row">
                                    <td className="title">{spell.rank}</td>
                                    <td className="title">{spell.title}</td>
                                    <td>{spell.description}</td>
                                    <td>
                                        <FlatButton onClick={__increaseSpellRank(spell)}><i className="fa fa-plus"></i></FlatButton>
                                        <FlatButton onClick={__decreaseSpellRank(spell)}><i className="fa fa-minus"></i></FlatButton>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        );
    }



    render() {
        const { newCharacter, source, selectChoice } = this.props;
        if (!newCharacter || newCharacter.classes.length < 1 || newCharacter.classes[0].title === "Unknown") return null;

        const spellCategories = getSpells(newCharacter).filter(category => category.spells && category.spells.length > 0);

        if (!spellCategories || spellCategories.length === 0) {
            return (
                <div>Nothing to see</div>
            )
        }
        else {
            const specials = spellCategories.map(category => {
                return {
                    title: category.title,
                    specials: category.spells.filter(spell => spell.type === "special")
                };
            });

            const choices = spellCategories.map(category => {
                return {
                    title: category.title,
                    choices: category.spells.filter(spell => spell.type === "choice")
                };
            });

            const other = spellCategories.map(category => {
                return {
                    title: category.title,
                    spells: category.spells.filter(spell => (spell.type !== "choice" && spell.type !== "special"))
                };
            });

            return (
                <div className="spell-configuration">
                    {
                        specials.map((category, i) => {
                            return (
                                category.specials.length > 0 ?
                                    <div key={i}>
                                        <h2>{category.title} Specials</h2>
                                        {
                                            category.specials.map((special, j) => {
                                                return (
                                                    <div className="row" key={j}>
                                                        <span className="title">{special.title}:</span>
                                                        <span>{special.description}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> :
                                    null
                            )
                        })
                    }

                    {
                        choices.map((category, i) => {
                            return (
                                category.choices.length > 0 ?
                                    <div key={i}>
                                        <h2>{category.title} Choices</h2>
                                        {
                                            category.choices.map((choice, j) => this.renderChoice(choice, j, category))
                                        }
                                    </div> :
                                    null
                            )
                        })
                    }

                    {
                        other.map((category, i) => {
                            return this.renderNormalSpell(category, i)
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
        selectChoice: (spellIndex, choiceIndex, category) => {
            dispatcher({
                type: 'SELECT_SPELL_CHOICE',
                payload: {
                    spellIndex, choiceIndex, category
                }
            });
        },
        increaseSpellRank: (spell, category) => {
            dispatcher({
                type: "SPELL_RANK_INCREASE",
                payload: { spell, category }
            });
        },
        decreaseSpellRank: (spell, category) => {
            dispatcher({
                type: "SPELL_RANK_DECREASE",
                payload: { spell, category }
            });
        }
    }
}
const __SpellConfiguration = connect(mapStateToProps, mapDispatcherToProps)(SpellConfiguration);

export default __SpellConfiguration;






