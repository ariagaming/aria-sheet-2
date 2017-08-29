
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This is the basic description of the NumberSlate component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class NumberSlate extends Component {
    render() {
        const numbers = [...Array(100).keys()];
        return (
            <div className="number-slate">
                {
                    numbers.map((n, i) => {
                        return (<span key={i}>{n}</span>);
                    })
                }
            </div>
        );
    }
}


NumberSlate.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

NumberSlate.defaultProps = {
    name: 'component-numberSlate'
}

export default NumberSlate;

