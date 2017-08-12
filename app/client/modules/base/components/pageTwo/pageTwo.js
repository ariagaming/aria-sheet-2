
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './../page/page';
import { connect } from 'react-redux';
import Container from './../container/container';
import _ from 'lodash';
import SpellConfiguration from './../spellConfiguration/spellConfiguration';
import { getSpells } from './../../../character/helpers';


/**
 * This is the basic description of the PageTwo component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageTwo extends Component {
    render() {
        const { character } = this.props;
        const construct = {
            lvl: character.level,
            STR: character.statistics.STR.total,
            AGI: character.statistics.AGI.total,
            INU: character.statistics.INU.total,
            PER: character.statistics.PER.total,
            INI: character.initiative.total,
            movement: character.movement.total,
            rank: 0
        };
        const pages = [
            { title: "Spell Configurations", content: <SpellConfiguration /> }
        ];
        const spells = getSpells(character);
        if (!spells || spells.length === 0) return null;

        const getDescription = (string, rank) => {
            const __construct = { ...construct, rank: (rank || 0) };
            return _.template(string)(__construct);
        }

        const RenderChoicedSpell = (props) => {
            const { spell } = props;
            const choice = spell.choices.filter(c => c.selected)[0];
            if (!choice) {
                return <div>No choice selected</div>
            }
            else {
                return (
                    <div className="row">
                        <span className="title">{choice.title}:</span>
                        <span>{getDescription(choice.description)}</span>
                    </div>
                );
            }
        }
        const RenderSpell = (props) => {
            const { spell } = props;
            return (
                <div className="row">
                    <span className="title">{spell.title}:</span>
                    <span>{getDescription(spell.description, spell.rank)}</span>
                </div>
            );
        }

        const RenderSpellTable = (props) => {
            const { category, level } = props;
            return (
                <table className="table">
                    <thead>
                        <tr><th className="spells-category" colSpan="3">{category.title}</th></tr>
                        <tr>
                            <th>level/rank</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category
                                .spells
                                .filter(spell => spell.level ? (spell.level <= level) : true)
                                .filter(spell => spell.rank ? (spell.rank > 0) : true)
                                .map((spell, i) => {

                                    const s = spell.choices ? spell.choices.filter(c => c.selected)[0] : spell;
                                    if (!s) {
                                        return (
                                            <tr key={i}>
                                                <td>{spell.level || spell.rank}</td>
                                                <td colSpan="2">No choice selected</td>
                                            </tr>
                                        )
                                    }
                                    else {
                                        return (
                                            <tr key={i} >
                                                <td>{spell.level || spell.rank}</td>
                                                <td>{s.title}</td>
                                                <td>{getDescription(s.description, spell.rank)}</td>
                                            </tr>
                                        )
                                    }
                                })
                        }
                    </tbody>
                </table>
            )
        }

        return (
            <Page className="page-two">
                <Container className="spells" title="" pages={pages}>
                    {
                        spells
                            .filter(s => s.spells && s.spells.length > 0)
                            .map((s, i) => {
                                return (
                                    <RenderSpellTable key={i} category={s} level={character.level} />
                                )
                            })
                    }
                </Container>
            </Page>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageTwo = connect(mapStateToProps)(PageTwo);

export default __PageTwo;

