
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the SelectRace component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class SelectRace extends Component {
    render() {
        const { newCharacter, selectRace } = this.props;
        if (!newCharacter) return null;

        const selectedRace = newCharacter.race.title;
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


SelectRace.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

SelectRace.defaultProps = {
    name: 'component-selectRace',
    races: PropTypes.array.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatcher) => {
    return {
        selectRace: (race) => {
            dispatcher({
                type: 'SELECT_RACE',
                payload: race
            });
        }
    }
}

const __SelectRace = connect(mapStateToProps, mapDispatchToProps)(SelectRace);

export default __SelectRace;

