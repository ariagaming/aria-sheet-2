import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditEquipment extends Component {

    componentWillMount() {
        this.setState({ weapon: null })
    }

    changeNewCharacter = (weapon) => {
        // initialize the description
        let desc = "";

        // create a description from the statistics
        const statistics = ["STR", "AGI", "INU", "PER"];
        statistics.forEach(stat => {
            if (weapon[stat] && weapon[stat] > 0) {
                desc += ", " + stat + ":" + weapon[stat];
            }
        });

        // extend the description from the feats
        this.props.newCharacter.feats.forEach(feat => {
            const value = weapon[feat.title];
            if (value && value > 0) {
                desc += ", " + feat.title + ":" + value;
            }
        });

        // generate a new list of weapons
        const newWeapons = this.props.newCharacter.weapons.map(e => {
            if (e.id === this.state.weapon.id) {
                if (desc.length > 1) desc = desc.slice(2);
                return { ...weapon, description: desc };
            } else {
                return e;
            }
        });

        // set the equipment
        this.props.newCharacter.weapons = newWeapons;
    }

    selectWeapon = (weapon) => {
        return () => {
            this.setState({ ...this.state, weapon });
        }
    }

    changeValue = (weapon, field) => {
        return (event) => {
            let newWeapon;
            if (event.target.type === "checkbox") {
                newWeapon = { ...this.state.weapon, [field]: event.target.checked };
            }
            else if (event.target.type === "number") {
                newWeapon = { ...this.state.weapon, [field]: (+event.target.value) };
            }
            else {
                newWeapon = { ...this.state.weapon, [field]: event.target.value };
            }
            this.setState({ ...this.state, weapon: newWeapon });
            this.changeNewCharacter(newWeapon);
        }
    }
    changeStatistic = (weapon, stat) => {
        return (event) => {
            const value = +event.target.value;
            const newWeapon = { ...this.state.weapon, [stat]: value };
            this.setState({ ...this.state, weapon: newWeapon });
            this.changeNewCharacter(newWeapon);
        }
    }
    changeFeatUp = (weapon, feat) => {
        return () => {
            const oldValue = this.state.weapon[feat] || 0;
            const newWeapon = { ...this.state.weapon, [feat]: oldValue + 1 };
            this.setState({ ...this.state, weapon: newWeapon });
            this.changeNewCharacter(newWeapon);
        }
    }
    changeFeatDown = (weapon, feat) => {
        return () => {
            const oldValue = this.state.weapon[feat] || 0;
            const newWeapon = { ...this.state.weapon, [feat]: (oldValue > 0 ? oldValue - 1 : 0) };
            this.setState({ ...this.state, weapon: newWeapon });
            this.changeNewCharacter(newWeapon);
        }
    }
    addNewWeapon = () => {
        const newWeapon = { id: 'id-' + (new Date()).getTime(), title: "New Weapon", information: "A new Weapon" };
        this.props.newCharacter.weapons.push(newWeapon);
        this.setState({ ...this.state, weapon: newWeapon });
    }
    removeWeapon = () => {
        this.props.newCharacter.weapons = this.props.newCharacter.weapons.filter(w => w.id !== this.state.weapon.id);
        this.setState({ ...this.state, weapon: null });
    }
    changeIsActive = (event) => {
        const { weapon } = this.state;
        this.props.newCharacter.weapons.forEach(w => {
            if (w.title === weapon.title) {
                w.isActive = event.target.checked;
            }
            else {
                w.isActive = false;
            }
        });
        this.setState({
            ...this.state,
            weapon: {
                ...this.state.weapon,
                isActive: event.target.checked
            }
        });
    }

    render() {

        const { selectTemplate, newCharacter, data } = this.props;
        const { weapons, feats } = newCharacter;
        const { weapon } = this.state;
        const __selectTemplate = (event) => {
            const title = event.target.value;
            const selectedTemplate = data.weapons.filter(w => w.title === title)[0];
            if (!selectedTemplate || !weapon) return;

            selectTemplate(selectedTemplate, weapon);
        }

        return (

            <div className="weapon-container">
                <div className="weapon-container__list" style={{ paddingRight: '2em' }}>
                    <div>
                        <span className="btn" onClick={this.addNewWeapon}><i className="fa fa-plus"></i>Add new</span>
                        {
                            weapon ?
                                <span className="btn" onClick={this.removeWeapon}><i className="fa fa-times"></i>Delete</span> :
                                null
                        }
                    </div>
                    {
                        weapons.map((e, i) => {
                            return (
                                <div key={i} className={"row" + (weapon && e.title === weapon.title ? ` selected` : '')} onClick={this.selectWeapon(e)}>
                                    {e.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="weapon-container__details">
                    {
                        weapon ?
                            <div>
                                <title>Information</title>
                                <div className="field">
                                    <label>Template</label>
                                    <select onChange={__selectTemplate}>
                                        <option></option>
                                        {
                                            data.weapons.map((w, i) => {
                                                return <option key={i}>{w.title}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Title</label>
                                    <input value={weapon.title || ""} onChange={this.changeValue(weapon, 'title')} />
                                </div>
                                <div className="field">
                                    <span>Active:</span>
                                    <input type="checkbox" checked={weapon.isActive || false} onChange={this.changeIsActive} />
                                </div>
                                <div className="field spread--evenly">
                                    <span>Damage:</span>
                                    <input type="number" value={weapon.numberOfDice || 0} onChange={this.changeValue(weapon, 'numberOfDice')} />
                                    <span>d</span>
                                    <input type="number" value={weapon.diceSides || 0} onChange={this.changeValue(weapon, 'diceSides')} />
                                    <span>+</span>
                                    <input type="number" value={weapon.constant || 0} onChange={this.changeValue(weapon, 'constant')} />
                                </div>
                                <div className="field">
                                    <span>Is ranged:</span>
                                    <input type="checkbox" checked={weapon.isRanged || false} onChange={this.changeValue(weapon, 'isRanged')} />
                                </div>
                                <div className="field">
                                    <label>Information</label>
                                    <textarea value={weapon.information || ""} onChange={this.changeValue(weapon, 'information')}></textarea>
                                </div>


                                <div className="grid">
                                    <div>
                                        <title>Statistics</title>
                                        <div className="field stacked">
                                            <label>STR</label>
                                            <input type="number" value={weapon.STR || 0} onChange={this.changeStatistic(weapon, 'STR')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>AGI</label>
                                            <input type="number" value={weapon.AGI || 0} onChange={this.changeStatistic(weapon, 'AGI')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>INU</label>
                                            <input type="number" value={weapon.INU || 0} onChange={this.changeStatistic(weapon, 'INU')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>PER</label>
                                            <input type="number" value={weapon.PER || 0} onChange={this.changeStatistic(weapon, 'PER')} />
                                        </div>
                                    </div>

                                    <div>
                                        <title>Feats</title>
                                        {
                                            feats.map((feat, i) => {
                                                return (
                                                    <div className="field spread" key={i}>
                                                        <span>{feat.title}</span>
                                                        <span><i className="fa fa-arrow-down" onClick={this.changeFeatDown(weapon, feat.title)}></i></span>
                                                        <span>{weapon[feat.title] || 0}</span>
                                                        <span><i className="fa fa-arrow-up" onClick={this.changeFeatUp(weapon, feat.title)}></i></span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div> :
                            null
                    }
                </div>
            </div>
        )

    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        selectTemplate: (template, weapon) => {
            dispatcher({
                type: 'TEMPLATE_WEAPON',
                payload: { template, weapon }
            })
        }
    }
}
const __EditEquipment = connect(mapStateToProps, mapDispatcherToProps)(EditEquipment);

export default __EditEquipment;