
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';

/**
 * This is the basic description of the Equipment component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Equipment extends Component {
    render() {

        const { equipment } = this.props.character;

        return (
            <div className="equipment">
                {
                    equipment.map((eq, i) => {
                        const { location, title, description } = eq;
                        return (
                            <div className="equipment-item" key={i}>
                                <span className="location">{location}</span>
                                <span className="title">{title}</span>
                                <span className="description">{description}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}


Equipment.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Equipment.defaultProps = {
    name: "component-equipment"
}

export default Equipment;

