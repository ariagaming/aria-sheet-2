
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './../page/page';
import { connect } from 'react-redux';
import Container from './../container/container';
import _ from 'lodash';
import SpellConfiguration from './../spellConfiguration/spellConfiguration';



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
            movement: character.movement.total,
            rank: 0
        };
        const pages = [
            { title: "Spell Configurations", content: <SpellConfiguration /> }
        ]

        const getDescription = (string) => {
            return _.template(string)(construct);
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

        return (
            <Page className="page-two">
                <Container className="spells" title="" pages={pages}>
                    {
                        (Object.keys(character.spells))
                            .map(s => character.spells[s])
                            .filter(s => s.spells.length > 0)
                            .map((s, i) => {
                                return (
                                    <div className="spell-details" key={i}>
                                        <h2>{s.title} Spells</h2>
                                        {
                                            s.spells
                                                .filter(s => (s.rank ? s.rank > 0 : true) && (s.level ? s.level >= character.level : true))
                                                .map((spell, j) => (
                                                    <div key={j} className="row">
                                                        <span className="title">{spell.title}:</span>
                                                        <span>{getDescription(spell.description)}</span>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                )
                            })
                    }
                </Container>
            </Page>
        );
    }
}


/*
    character
        .spells
        .filter(s => s.level <= character.level)
        .map((spell, i) => {
            if (spell.choices) {
                return <RenderChoicedSpell key={i} spell={spell} />;
            }
            else {
                return (
                    <div key={i} className="row">
                        <span className="title">{spell.title}:</span>
                        <span>{getDescription(spell.description)}</span>
                    </div>
                )
            }
        })
*/


const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageTwo = connect(mapStateToProps)(PageTwo);

export default __PageTwo;

