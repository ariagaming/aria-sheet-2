
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';

/**
 * This is the basic description of the Statistics component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Statistics extends Component {
    render() {
        const { STR, AGI, INU, PER } = this.props.character.statistics;
        return (
            <div className="character-statistics">
                <div className="statistic character-statistics__str">
                    <span className="bonus">{STR.bonus}</span>
                    <span className="total">{STR.total}</span>
                </div>
                <div className="statistic character-statistics__agi">
                    <span className="bonus">{AGI.bonus}</span>
                    <span className="total">{AGI.total}</span>
                </div>
                <div className="statistic character-statistics__inu">
                    <span className="bonus">{INU.bonus}</span>
                    <span className="total">{INU.total}</span>
                </div>
                <div className="statistic character-statistics__per">
                    <span className="bonus">{PER.bonus}</span>
                    <span className="total">{PER.total}</span>
                </div>
            </div>
        );
    }
}


Statistics.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Statistics.defaultProps = {
    name: "component-statistics"
}

export default Statistics;

