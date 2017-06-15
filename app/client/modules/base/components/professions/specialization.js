
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the SelectRace component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Specialization extends Component {
    render() {
        const { newCharacter, selectSpecialization } = this.props;
        const __selectSpecialization = (classTitle, specialization) => {
            return () => {
                selectSpecialization(classTitle, specialization);
            }
        }
        if (!newCharacter) return null;

        return (
            <div>
                {

                    newCharacter.classes.map((c, i) => {
                        return (
                            <div key={i}>
                                <title>{c.title}</title>
                                {
                                    c.specializations ?

                                        c.specializations.map((s, j) => {
                                            return (
                                                <div className={"tile" + (s.selected ? " selected" : "")}
                                                    key={j}
                                                    onClick={__selectSpecialization(c.title, s.title)}>
                                                    <span>{s.title}</span>
                                                </div>
                                            )
                                        }) :

                                        <span>No Specialization</span>
                                }
                            </div>
                        );
                    })

                }
            </div>
        );
    }
}


const mapStateToProps = state => state;
const mapDispatchToProps = (dispatcher) => {
    return {
        selectSpecialization: (classTitle, specialization) => {
            dispatcher({
                type: 'PROFESSION_SPECIALIZATION',
                payload: { classTitle, specialization }
            });
        }
    }
}

const __Specialization = connect(mapStateToProps, mapDispatchToProps)(Specialization);

export default __Specialization;

