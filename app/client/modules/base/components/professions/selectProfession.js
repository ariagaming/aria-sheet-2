
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Select a profession
 */
class SelectProfessions extends Component {
    render() {
        const { newCharacter, data, selectProfession } = this.props;
        const { professions } = data;

        if (!newCharacter) return null;

        const selectedProfessions = newCharacter.classes.map(c => c.title);
        const __selectProfession = (profession) => {
            return () => {
                selectProfession(profession);
            }
        };

        return (
            <div>
                {
                    professions.map((profession, i) => {
                        return (
                            <div key={i} className={"tile" + (selectedProfessions.indexOf(profession.title) > -1 ? ' selected' : '')} onClick={__selectProfession(profession)}>
                                <span>{profession.title}</span>
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
        selectProfession: (profession) => {
            dispatcher({
                type: 'SELECT_PROFESSION',
                payload: profession
            });
        }
    }
}

const __SelectProfessions = connect(mapStateToProps, mapDispatchToProps)(SelectProfessions);

export default __SelectProfessions;

