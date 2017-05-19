
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This is the basic description of the Weapons component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Weapons extends Component {
    render() {
        return <div className="weapons">Weapons</div>;
    }
}


Weapons.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

Weapons.defaultProps = {
    name: "component-weapons"
}

export default Weapons;

