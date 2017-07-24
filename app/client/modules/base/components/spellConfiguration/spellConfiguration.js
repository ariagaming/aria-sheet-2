
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';

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
            <div className="choices">
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

    renderNormalSpell(spell, category) {
        return (
            <div className="row">
                {spell.rank ? <span className="title">rank:{spell.rank}</span> : null}
                {spell.level ? <span className="title">lvl:{spell.level}</span> : null}
                <span className="title">{spell.title}</span>
                <span>{spell.description}</span>
            </div>
        );
    }



    render() {
        const { newCharacter, source, selectChoice } = this.props;
        if (!newCharacter || newCharacter.classes.length < 1 || newCharacter.classes[0].title === "Unknown") return null;

        const spellCategories = getSpells(newCharacter).filter(category => category.spells.length > 0);

        const RenderSpell = (props) => {
            const { spell, index, category } = props;
            if (spell.type === "choice") {
                return this.renderChoice(spell, index, category);
            }
            else {
                return this.renderNormalSpell(spell, category);
            }
        }

        if (!spellCategories || spellCategories.length === 0) {
            return (
                <div>Nothing to see</div>
            )
        }
        else {

            return (
                <div className="spell-configuration">
                    {
                        spellCategories.map((category, i) => {
                            return (
                                <div key={i}>
                                    <h2>{category.title} Spells</h2>
                                    {
                                        category.spells.map((spell, j) => <RenderSpell spell={spell} category={category.title} index={j} key={j} />)
                                    }
                                </div>
                            )

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
        }
    }
}
const __SpellConfiguration = connect(mapStateToProps, mapDispatcherToProps)(SpellConfiguration);

export default __SpellConfiguration;



/**
if (category.choices) {
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
                                <span>{spell.level || spell.rank}</span>
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
            {spell.rank ? <span className="title">rank:{spell.rank}</span> : null}
            {spell.level ? <span className="title">lvl:{spell.level}</span> : null}
            <span className="title">{spell.title}</span>
            <span>{spell.description}</span>
        </div>
    )
}
 */
