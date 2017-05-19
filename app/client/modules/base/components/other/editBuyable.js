

import React, { Component } from 'react';
import skillDot from './../other/skillDot';
import { connect } from 'react-redux';

/**
 * Edit Professions
 */
class EditBuyable extends Component {
    render() {

        const { newCharacter, buy, type, prop } = this.props;

        return (
            <div>
                {
                    newCharacter[prop].map((buyable, i) => {
                        const { bought, expertise, title } = buyable;
                        return (
                            <div key={i} className="row" onClick={buy(prop, buyable, type)}>
                                {skillDot(bought)}
                                {skillDot(expertise)}
                                <span className="title"> {title}</span>
                            </div>
                        )
                    })
                }
            </div >
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        buy: (prop, buyable, source) => {

            return () => {
                dispatcher({
                    type: 'BUY',
                    payload: {
                        prop,
                        buyable,
                        source
                    }
                });
            }
        }
    }
}
const __EditBuyable = connect(mapStateToProps, mapDispatcherToProps)(EditBuyable);

export default __EditBuyable;