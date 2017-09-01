
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './../page/page';
import { connect } from 'react-redux';
import Container from './../container/container';
import _ from 'lodash';
import InformationPage from './informationPage';

/**
 * This is the basic description of the PageThree component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageThree extends Component {
    render() {
        const { character } = this.props;
        const levelCaps = [0, 21, 33, 46, 60, 75, 91, 108, 126, 145, 165, 186, 208, 211];
        const APPerLevel = [12, 15, 20, 24, 27, 29, 30, 31, 32, 33, 34, 35];
        const construct = {
            lvl: character.level,
            STR: character.statistics.STR.bonus,
            AGI: character.statistics.AGI.bonus,
            INU: character.statistics.INU.bonus,
            PER: character.statistics.PER.bonus,
            INI: character.initiative.total,
            movement: character.movement.total,
            critDMG: character.critDMG,
            rank: 0
        };
        const getDescription = (string, rank) => {
            const __construct = { ...construct, rank: (rank || 0) };
            return _.template(string)(__construct);
        }


        const Fill = source => <i className={"fa fa-circle " + source}></i>;
        const Empty = <i className="fa fa-circle-o"></i>;

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
                        <span>lvl:{character.level} +</span>
                        <span>exp:{character.expertise.feats} +</span>
                        <span>STR:{character.statistics.STR.bonus} +</span>
                        <span>WS: {character.expertise.wsExpertise} =</span>
                        <span>{(character.expertise.wsExpertise) + character.statistics.STR.bonus + character.expertise.total}</span>
                    </div>
                    <div className="row">
                        <span className="title">Ball. Skill:</span>
                        <span>level:{character.level} +</span>
                        <span>exp:{character.expertise.feats} +</span>
                        <span>BS: {character.expertise.bsExpertise} =</span>
                        <span>{(character.expertise.bsExpertise) + character.expertise.total}</span>
                    </div>
                    <title>Expertise breakdown</title>
                </div>

                <div className="container hp-breakdown">
                    <div className="row">
                        <span className="title">STR:</span>
                        <span>{character.statistics.STR.bonus}</span>
                        <span>*</span>
                        <span className="title">STR Factor:</span>
                        <span>{character.hp.STRFactor}</span>
                        <span>=</span>
                        <span className="title">Total</span>
                        <span>{character.statistics.STR.bonus * character.hp.STRFactor}</span>
                    </div>

                    <div className="row">
                        <span className="title">Base Stamina</span>
                        <span>{character.hp.base} +</span>
                        <span className="title">Stamina:</span>
                        <span>{character.hp.factor} = </span>
                        <span>{character.hp.base + character.hp.factor}</span>
                    </div>

                    <div className="row">
                        <span>(lvl:{character.level} + </span>
                        <span>STR:{character.statistics.STR.bonus * character.hp.STRFactor}) *</span>
                        <span>{character.hp.base + character.hp.factor} =</span>
                        <span>{character.hp.total}</span>
                    </div>



                    <title>HP breakdown</title>
                </div>

                <div className="container feat-description">
                    {
                        character.feats.map((feat, i) => {
                            return (
                                <div className="row" key={i}>
                                    <span className="title">{feat.title}</span>
                                    <span>{getDescription(feat.description)}</span>
                                </div>
                            )
                        })
                    }
                    <title>Feat description</title>
                </div>

                <div className="container statistics-breakdown">

                    <table>
                        <thead>
                            <tr>
                                <th>stat</th>
                                <th>lvl</th>
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
                                <td>{character.statistics.STR.level}</td>
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
                                <td>{character.statistics.AGI.level}</td>
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
                                <td>{character.statistics.INU.level}</td>
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
                                <td>{character.statistics.PER.level}</td>
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

                <div className="container feat-breakdown">
                    <table>
                        <thead>
                            <tr>
                                <th className="left">feat</th>
                                <th>base</th>
                                <th>bought</th>
                                <th>eq</th>
                                <th>weap</th>
                                <th>fact.</th>
                                <th>spec</th>
                                <th>spell</th>
                                <th>tot.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                character.feats.map((feat, i) => {
                                    let unit = feat.unit;
                                    if (feat.title === "Crit DMG") unit = character.critDMG;
                                    if (feat.title === "Splash DMG") unit = character.splashDMG;
                                    return (
                                        <tr className="row" key={i}>
                                            <td className="left">{feat.title}</td>
                                            <td>{feat.base}</td>
                                            <td>{feat.bought}</td>
                                            <td>{feat.equipment}</td>
                                            <td>{feat.weapon}</td>
                                            <td>{feat.sign}{feat.factor || 1}{unit}</td>
                                            <td>{feat.specials}</td>
                                            <td>{feat.spells}</td>
                                            <td>{feat.sign}{feat.total}{unit}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <title>Feats breakdown</title>
                </div>
                <div className="container skill-breakdown">
                    <p>
                        Each skill has three "modes". 'Not Proficient', 'Proficient' and 'Expertise'. When you are 'Not Proficient' in a skill you can roll for this skill with a 1d10.
                        You can not roll a critical. The following examples revolve around the made up skill 'Fishing'. With zero bubbles filled you are 'Not Proficient', with one
                        bubble filled you are 'Proficient' and can roll for this skill with 1d20 and roll a critical. With two bubbles filled you can roll with 1d20 + Expertise.
                    </p>
                    <div className="container">
                        <div className="row">
                            {Empty}
                            {Empty}
                            <span>Fishing</span>
                        </div>
                        <div className="row">
                            {Fill('')}
                            {Empty}
                            <span>Fishing</span>
                        </div><div className="row">
                            {Fill('')}
                            {Fill('')}
                            <span>Fishing</span>
                        </div>
                    </div>


                    <title>How skill rolls work</title>
                </div>

                <div className="container xp-level">
                    <p>The level caps with XP:</p>
                    {
                        levelCaps.map((_xp, i) => `lvl ${i} - ${_xp}xp`).join('; ')
                    }
                    <title>XP per Level</title>
                </div>

                <div className="container ap-level">
                    <p>The level caps with XP:</p>
                    {
                        APPerLevel.map((_ap, i) => `lvl ${i + 1} - ${_ap} AP`).join('; ')
                    }
                    <title>AP per Level</title>
                </div>


                <div className="container skills-breakdown">
                    <table className="table--skills-breakdown">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Stat</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                character.skills.map((skill, i) => {
                                    return (
                                        <tr className="row" key={i}>
                                            <td>{skill.title}</td>
                                            <td>({skill.stat})</td>
                                            <td>{skill.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <title>Skills breakdown</title>
                </div>


                <Container className="character-information" title="Extra Character Information" pages={[{ content: <InformationPage /> }]}>
                    {character.information || "No information"}
                </Container>


            </Page>
        );
    }
}





const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageThree = connect(mapStateToProps)(PageThree);

export default __PageThree;

