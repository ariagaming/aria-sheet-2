
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './../page/page';
import { connect } from 'react-redux';
import Container from './../container/container';

/**
 * This is the basic description of the PageThree component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageThree extends Component {
    render() {
        const { character } = this.props;

        return (
            <Page className="page-three">
                <div className="container expertise-breakdown">
                    <div className="row">
                        <span className="title">Total:</span>
                        <span>(level:{character.level}) +</span>
                        <span>(feat:{character.expertise.feats}) =</span>
                        <span>{character.expertise.total}</span>
                    </div>
                    <div className="row">
                        <span className="title">Weapon Skill:</span>
                        <span>level:{character.level} +</span>
                        <span>feat:{character.expertise.feats} +</span>
                        <span>WS: {character.expertise.wsExpertise} =</span>
                        <span>{(character.expertise.wsExpertise) + character.expertise.total}</span>
                    </div>
                    <div className="row">
                        <span className="title">Ball. Skill:</span>
                        <span>level:{character.level} +</span>
                        <span>feat:{character.expertise.feats} +</span>
                        <span>BS: {character.expertise.bsExpertise} =</span>
                        <span>{(character.expertise.bsExpertise) + character.expertise.total}</span>
                    </div>
                    <title>Expertise breakdown</title>
                </div>

                <div className="container hp-breakdown">
                    <title>HP breakdown</title>
                </div>

                <div className="container feats-breakdown">
                    {
                        character.feats.map((feat, i) => {
                            return (
                                <div className="row" key={i}>
                                    <span className="title">{feat.title}</span>
                                    <span>{feat.description}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="container statistics-breakdown">

                    <table>
                        <thead>
                            <tr>
                                <th>stat</th>
                                <th>base</th>
                                <th>race</th>
                                <th>prof</th>
                                <th>eq</th>
                                <th>weap</th>
                                <th>total</th>
                                <th>bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row">
                                <td className="title">STR:</td>
                                <td>{character.statistics.STR.base}</td>
                                <td>{character.statistics.STR.race}</td>
                                <td>{character.statistics.STR.profession}</td>
                                <td>{character.statistics.STR.equipment}</td>
                                <td>{character.statistics.STR.weapon}</td>
                                <td>{character.statistics.STR.total}</td>
                                <td>{character.statistics.STR.bonus}</td>
                            </tr>
                            <tr className="row">
                                <td className="title">AGI:</td>
                                <td>{character.statistics.AGI.base}</td>
                                <td>{character.statistics.AGI.race}</td>
                                <td>{character.statistics.AGI.profession}</td>
                                <td>{character.statistics.AGI.equipment}</td>
                                <td>{character.statistics.AGI.weapon}</td>
                                <td>{character.statistics.AGI.total}</td>
                                <td>{character.statistics.AGI.bonus}</td>
                            </tr>
                            <tr className="row">
                                <td className="title">INU:</td>
                                <td>{character.statistics.INU.base}</td>
                                <td>{character.statistics.INU.race}</td>
                                <td>{character.statistics.INU.profession}</td>
                                <td>{character.statistics.INU.equipment}</td>
                                <td>{character.statistics.INU.weapon}</td>
                                <td>{character.statistics.INU.total}</td>
                                <td>{character.statistics.INU.bonus}</td>
                            </tr>
                            <tr className="row">
                                <td className="title">PER:</td>
                                <td>{character.statistics.PER.base}</td>
                                <td>{character.statistics.PER.race}</td>
                                <td>{character.statistics.PER.profession}</td>
                                <td>{character.statistics.PER.equipment}</td>
                                <td>{character.statistics.PER.weapon}</td>
                                <td>{character.statistics.PER.total}</td>
                                <td>{character.statistics.PER.bonus}</td>
                            </tr>
                        </tbody>
                    </table>



                    <title>Statistics</title>
                </div>

            </Page>
        );
    }
}





const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageThree = connect(mapStateToProps)(PageThree);

export default __PageThree;

