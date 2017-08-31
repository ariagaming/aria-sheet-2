

import React, { Component } from 'react';
import skillDot from './../other/skillDot';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';

/**
 * Edit Professions
 */
class EditBuyable extends Component {
    render() {

        const { newCharacter, buy, source, prop } = this.props;
        if (!newCharacter) return null;

        const list = newCharacter[prop];
        const bought = (newCharacter.buyables[prop][source] || []).length;
        const max = (() => {
            if (source === "race") {
                if (prop === "skills") return newCharacter.race.skillPoints || 999;
                else if (prop === "professions") return newCharacter.race.professionPoints || 1;
                else 999;
            }
            else if (source === "profession") {
                if (prop === "skills") return (newCharacter.classes[0] || {}).skillPoints || 999;
                else if (prop === "professions") return (newCharacter.classes[0] || {}).professionPoints || 0;
                else 999;
            }
            else return 999;
        })();
        const remaining = max - bought;
        const buyItem = (prop, buyable, source) => {
            return () => {
                buy(prop, buyable, source, max);
            }
        }

        return (
            <div>
                {remaining < 900 ? <h2>Remaining: {remaining}</h2> : null}
                <div className="list">
                    {
                        list.map((buyable, i) => {
                            const { bought, expertise, title } = buyable;
                            return (
                                <div key={i} className="row" onClick={buyItem(prop, buyable, source, max)}>
                                    {skillDot(bought)}
                                    {skillDot(expertise)}
                                    <span className="title"> {title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        );
    }
}

EditBuyable.propTypes = {
    prop: string.isRequired,
    max: number,
    source: string.isRequired
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        buy: (prop, buyable, source, max) => {
            dispatcher({
                type: 'BUY',
                payload: {
                    prop,
                    buyable,
                    source,
                    max
                }
            });
        }
    }
}
const __EditBuyable = connect(mapStateToProps, mapDispatcherToProps)(EditBuyable);

export default __EditBuyable;