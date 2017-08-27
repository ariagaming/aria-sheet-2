
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';

class RankedSpell extends Component {


    render() {
        const { categories } = this.props;
        const { increaseSpellRank, decreaseSpellRank } = this.props;
        const __increaseSpellRank = (spell, category) => {
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
            <div>
                {
                    categories.map((category, j) => {
                        if (category.spells.length === 0) return null;
                        return (
                            <div key={j} style={{ marginTop: "2em" }}>
                                <h2>{category.title} Ranked Spells</h2>
                                <table className="table">
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
                                                            <FlatButton onClick={__increaseSpellRank(spell, category.title)}><i className="fa fa-plus"></i></FlatButton>
                                                            <FlatButton onClick={__decreaseSpellRank(spell, category.title)}><i className="fa fa-minus"></i></FlatButton>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
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
const __RankedSpell = connect(mapStateToProps, mapDispatcherToProps)(RankedSpell);

export default __RankedSpell;