import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditFeats extends Component {
    render() {
        const { newCharacter, buy } = this.props;
        const { feats } = newCharacter;
        const changeBought = (feat) => {
            return (event) => {
                buy(feat, +event.target.value);
            }
        }

        return (

            <div style={{ display: "flex" }}>

                <div style={{ flex: 2 }}>

                    <table className="feats-table" style={{ columns: 2 }}>
                        <thead>
                            <tr>
                                <th>Feat</th>
                                <th>base</th>
                                <th>rank</th>
                                <th>eq</th>
                                <th>bought</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feats.map((feat, index) => {
                                    return (
                                        <tr key={index} className="row">
                                            <td>{feat.title}</td>
                                            <td>{feat.base}</td>
                                            <td>{feat.rank}</td>
                                            <td>{feat.equipment}</td>
                                            <td><input type="number" value={feat.bought} onChange={changeBought(feat)} /></td>
                                            <td>{feat.total}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
                <div style={{ flex: 1 }}>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        buy: (feat, value) => {
            dispatcher({
                type: 'BUY_FEAT',
                payload: { feat, value }
            });
        }
    }
}
const __EditFeats = connect(mapStateToProps, mapDispatcherToProps)(EditFeats);

export default __EditFeats;
