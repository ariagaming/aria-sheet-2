
import React, { Component } from 'react';
import Dialog from './dialog';
import { connect } from 'react-redux';
import Page from './page';

/**
 * 
 */
class ArmorDialog extends Component {

    render() {
        const { newCharacter, changeArmor } = this.props;
        if (!newCharacter) return null;
        const { type } = newCharacter.armor;
        const { armorDialogShown, index } = this.props.dialog;
        const change = (armor) => {
            return () => {
                changeArmor(armor);
            }
        }
        return (
            <Dialog show={armorDialogShown} title="Professions Dialog">
                <Page show={index === 0}>
                    <div className="armor-dialog">
                        <div>
                            {
                                armors.map((a, i) => {
                                    return (
                                        <div key={i}>
                                            <input type="radio" name="armor" value={a.title} onChange={change(a)} checked={type === a.title ? "checked" : ""} />
                                            <span>{a.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            changed
                        </div>
                    </div>
                </Page>
            </Dialog>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        changeArmor: (armor) => {
            dispatcher({
                type: 'CHANGE_ARMOR',
                payload: armor
            });
        }
    }
}
const __ArmorDialog = connect(mapStateToProps, mapDispatcherToProps)(ArmorDialog);

export default __ArmorDialog;


const armors = [
    { title: "None", armor: 0, movement: 0 },
    { title: "Leather", armor: 2, movement: 0 },
    { title: "Studded Leather", armor: 3, movement: 0 },
    { title: "Mail", armor: 5, movement: -1 },
    { title: "Scales", armor: 6, movement: -1 },
    { title: "Plate", armor: 8, movement: -2 },
    { title: "Full Plate", armor: 10, movement: -2 }
]