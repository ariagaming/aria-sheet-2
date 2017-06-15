
import React, { Component } from 'react';
import { string, number } from 'prop-types';

/**
 * This is the basic description of the StatisticInfo component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class StatisticInfo extends Component {
    render() {
        const { onClick, type } = this.props;
        return (
            <div className={"statistic-info" + (type ? ` ${type}` : '') + (onClick ? ` has-click` : '')} onClick={onClick || (() => { })}>
                <span className="value"><span className="prefix">{this.props.prefix || ""}</span>{this.props.value}</span>
                <span className="title">{this.props.title}</span>
                <span className="postfix">{this.props.postfix}</span>
            </div>
        );
    }
}


StatisticInfo.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string,
    title: string.isRequired,
    value: number.isRequired,
    type: string.isRequired,
    postfix: string
}

StatisticInfo.defaultProps = {
    name: "component-statisticInfo",
    value: 0
}

export default StatisticInfo;

