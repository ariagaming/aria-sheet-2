
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This is the basic description of the SpecialAbilities component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class SpecialAbilities extends Component {
    render() {
        return <div>SpecialAbilities</div>;
    }
}


SpecialAbilities.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

SpecialAbilities.defaultProps = {
    name: "component-specialAbilities"
}

export default SpecialAbilities;

