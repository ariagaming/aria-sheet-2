
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';

class ChoiceSpell extends Component {


    render() {
        const { categories, selectChoice } = this.props;
        const __selectChoice = (spellIndex, choiceIndex, category, spellId) => {
            return () => {
                this.props.selectChoice(spellIndex, choiceIndex, category, spellId);
            }
        }

        return (
            <div style={{ marginTop: "4em" }}>
                {
                    categories.map((category, j) => {
                        if (category.spells.length === 0) return null;
                        return (
                            <div key={j}>
                                <h2>{category.title} Choices</h2>

                                {
                                    category.spells.map((spell, i) => (
                                        <div className="choices" key={i}>
                                            <div className="title">
                                                <span style={{ padding: "0em" }}>{spell.level}</span>
                                            </div>
                                            {
                                                spell.choices.map((choice, k) => {
                                                    return (
                                                        <div key={k} className={"choice" + (choice.selected ? " selected" : "")} onClick={__selectChoice(i, k, category.title, spell.id)}>
                                                            <span className="title">{choice.title || ""}</span>
                                                            <span>{choice.description}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ))
                                }

                            </div>
                        )

                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        selectChoice: (spellIndex, choiceIndex, category, spellId) => {
            dispatcher({
                type: 'SELECT_SPELL_CHOICE',
                payload: {
                    spellIndex, choiceIndex, category, spellId
                }
            });
        }
    }
}
const __ChoiceSpell = connect(mapStateToProps, mapDispatcherToProps)(ChoiceSpell);

export default __ChoiceSpell;