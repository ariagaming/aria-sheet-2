
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the XpInfo component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class XpInfo extends Component {
    render() {
        const { character } = this.props;
        return (
            <div className="xp-info">
                {character.XP.filled} / 20
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const __XpInfo = connect(mapStateToProps, mapDispatchToProps)(XpInfo);

export default __XpInfo;

