import React, { Component } from 'react';



export default class EditEquipment extends Component {

    componentWillMount() {
        this.setState({ eq: null })
    }

    changeNewCharacter = (eq) => {
        // initialize the description
        let desc = "";

        // create a description from the statistics
        const statistics = ["STR", "AGI", "INU", "PER"];
        statistics.forEach(stat => {
            if (eq[stat] && eq[stat] > 0) {
                desc += ", " + stat + ":" + eq[stat];
            }
        });

        // extend the description from the feats
        this.props.newCharacter.feats.forEach(feat => {
            const value = eq[feat.title];
            if (value && value > 0) {
                desc += ", " + feat.title + ":" + value;
            }
        });

        // generate a new list of equipment
        const newEqs = this.props.newCharacter.equipment.map(e => {
            if (e.location === this.state.eq.location) {
                if (desc.length > 1) desc = desc.slice(2);
                return { ...eq, description: desc };
            } else {
                return e;
            }
        });

        // set the equipment
        this.props.newCharacter.equipment = newEqs;
    }

    selectEquipment = (eq) => {
        return () => {
            this.setState({ ...this.state, eq });
        }
    }

    changeValue = (eq, field) => {
        return (event) => {
            const newEq = { ...this.state.eq, [field]: event.target.value };
            this.setState({ ...this.state, eq: newEq });
            this.changeNewCharacter(newEq);
        }
    }
    changeStatistic = (eq, stat) => {
        return (event) => {
            const value = +event.target.value;
            const newEq = { ...this.state.eq, [stat]: value };
            this.setState({ ...this.state, eq: newEq });
            this.changeNewCharacter(newEq);
        }
    }
    changeFeatUp = (eq, feat) => {
        return () => {
            const oldValue = this.state.eq[feat] || 0;
            const newEq = { ...this.state.eq, [feat]: oldValue + 1 };
            this.setState({ ...this.state, eq: newEq });
            this.changeNewCharacter(newEq);
        }
    }
    changeFeatDown = (eq, feat) => {
        return () => {
            const oldValue = this.state.eq[feat] || 0;
            const newEq = { ...this.state.eq, [feat]: (oldValue > 0 ? oldValue - 1 : 0) };
            this.setState({ ...this.state, eq: newEq });
            this.changeNewCharacter(newEq);
        }
    }

    render() {

        const { equipment, feats } = this.props.newCharacter;
        const { eq } = this.state;

        return (

            <div className="eq-container">
                <div className="eq-container__list">
                    {
                        equipment.map((e, i) => {
                            return (
                                <div key={i} className="row" onClick={this.selectEquipment(e)}>
                                    [{e.location.toUpperCase()}] {e.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="eq-container__details">
                    {
                        eq ?
                            <div>
                                <title>Location: {eq.location}</title>
                                <div className="field">
                                    <label>Title</label>
                                    <input value={eq.title} onChange={this.changeValue(eq, 'title')} />
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <textarea value={eq.description} onChange={this.changeValue(eq, 'description')}></textarea>
                                </div>


                                <div className="grid">
                                    <div>
                                        <title>Statistics</title>
                                        <div className="field stacked">
                                            <label>STR</label>
                                            <input type="number" value={eq.STR || 0} onChange={this.changeStatistic(eq, 'STR')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>AGI</label>
                                            <input type="number" value={eq.AGI || 0} onChange={this.changeStatistic(eq, 'AGI')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>INU</label>
                                            <input type="number" value={eq.INU || 0} onChange={this.changeStatistic(eq, 'INU')} />
                                        </div>
                                        <div className="field stacked">
                                            <label>PER</label>
                                            <input type="number" value={eq.PER || 0} onChange={this.changeStatistic(eq, 'PER')} />
                                        </div>
                                    </div>

                                    <div>
                                        <title>Feats</title>
                                        {
                                            feats.map((feat, i) => {
                                                return (
                                                    <div className="field spread" key={i}>
                                                        <span>{feat.title}</span>
                                                        <span><i className="fa fa-arrow-down" onClick={this.changeFeatDown(eq, feat.title)}></i></span>
                                                        <span>{eq[feat.title] || 0}</span>
                                                        <span><i className="fa fa-arrow-up" onClick={this.changeFeatUp(eq, feat.title)}></i></span>
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