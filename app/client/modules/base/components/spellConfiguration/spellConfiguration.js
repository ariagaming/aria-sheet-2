
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';
import NormalSpells from "./normalSpell";
import ChoiceSpells from "./choiceSpell";
import RankedSpell from "./rankedSpell";
import PowerWords from "./powerWords";
/**
 * This is the basic description of the SpellConfiguration component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class SpellConfiguration extends Component {

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
            const getSpellByType = (type) => {
                return spellCategories.map(category => {
                    return {
                        title: category.title,
                        spells: category.spells.filter(spell => spell.type === type)
                    };
                });
            }

            const specials = getSpellByType("special");
            const choices = getSpellByType("choice");
            const levelBased = getSpellByType("level");
            const rankBased = getSpellByType("ranked");
            const powerWords = getSpellByType("powerWord");

            return (
                <div className="spell-configuration">

                    {
                        <NormalSpells categories={levelBased} />
                    }

                    {
                        <ChoiceSpells categories={choices} />
                    }

                    {
                        <RankedSpell categories={rankBased} />
                    }

                    {
                        <PowerWords categories={powerWords} />
                    }

                </div>
            )
        }
    }
}



const mapStateToProps = (state, ownProps) => state;
const mapDispatcherToProps = (dispatcher, ownProps) => ({});
const __SpellConfiguration = connect(mapStateToProps, mapDispatcherToProps)(SpellConfiguration);

export default __SpellConfiguration;






// <div className="spell-configuration">
                //     {
                //         specials.map((category, i) => {
                //             return (
                //                 category.specials.length > 0 ?
                //                     <div key={i}>
                //                         <h2>{category.title} Specials</h2>
                //                         {
                //                             category.specials.map((special, j) => {
                //                                 return (
                //                                     <div className="row" key={j}>
                //                                         <span className="title">{special.title}:</span>
                //                                         <span>{special.description}</span>
                //                                     </div>
                //                                 )
                //                             })
                //                         }
                //                     </div> :
                //                     null
                //             )
                //         })
                //     }

                //     {
                //         choices.map((category, i) => {
                //             return (
                //                 category.choices.length > 0 ?
                //                     <div key={i}>
                //                         <h2>{category.title} Choices</h2>
                //                         {
                //                             category.choices.map((choice, j) => this.renderChoice(choice, j, category))
                //                         }
                //                     </div> :
                //                     null
                //             )
                //         })
                //     }

                //     {
                //         other.map((category, i) => {
                //             return this.renderNormalSpell(category, i)
                //         })
                //     }



                // </div>