
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
        if (!newCharacter) return null;

        const selectedSpecialization = newCharacter.race.title;
        const { races } = this.props.data;
        const __selectRace = (race) => {
            return () => {
                selectRace(race);
            }
        };

        return (
            <div>
                {
                    races.map((r, i) => {
                        return (
                            <div key={i} className={"tile" + (selectedRace === r.title ? " selected" : "")} onClick={__selectRace(r)}>
                                <span>{r.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = state => state;
const mapDispatchToProps = (dispatcher) => {
    return {
        selectSpecialization: (specialization) => {
            dispatcher({
                type: 'RACE_SPECIALIZATION',
                payload: specialization
            });
        }
    }
}

const __Specialization = connect(mapStateToProps, mapDispatchToProps)(Specialization);

export default __Specialization;

