
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';

/**
 * This is the basic description of the Language component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Language extends Component {
    render() {
        return <Container className="languages" title="languages">Language</Container>;
    }
}


Language.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Language.defaultProps = {
    name: 'component-language'
}

export default Language;

