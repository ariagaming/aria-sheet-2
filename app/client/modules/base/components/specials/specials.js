
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';

/**
 * This is the basic description of the Specials component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Specials extends Component {
    render() {
        return (
            <Container title="Specials" className="specials">
                Specials
            </Container>
        );
    }
}


Specials.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Specials.defaultProps = {
    name: 'component-specials'
}

export default Specials;

