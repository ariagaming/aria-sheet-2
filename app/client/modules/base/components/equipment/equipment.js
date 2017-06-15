
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import EditEquipment from './editEquipment';


/**
 * This is the basic description of the Equipment component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Equipment extends Component {
    render() {

        const { equipment } = this.props.character;
        const pages = [
            { title: "Edit Equipment", content: <EditEquipment /> }
        ];

        return (
            <Container className="equipment" title="Equipment" pages={pages}>
                {
                    equipment.map((eq, i) => {
                        const { location, title, description } = eq;
                        return (
                            <div className="equipment-item" key={i}>
                                <span className="location" style={{ display: 'inline-block', width: '80px' }}>{location}</span>
                                <span className="title">{title}</span>
                                <span className="description">{description}</span>
                            </div>
                        );
                    })
                }
            </Container>
        );
    }
}


export default Equipment;

