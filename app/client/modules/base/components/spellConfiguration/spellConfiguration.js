
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';

import NormalSpells from "./normalSpell";
import SpecialsSpells from "./specialsSpells";
import ChoiceSpells from "./choiceSpell";
import RankedSpell from "./rankedSpell";
import PowerWords from "./powerWords";

class SpellConfiguration extends Component {

    render() {
        const { newCharacter, source, selectChoice } = this.props;
        if (!newCharacter) return null;
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

                    {
                        <SpecialsSpells categories={specials} title="Specials" />
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

