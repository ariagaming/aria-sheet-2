
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * This is the basic description of the Boss component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Boss extends Component {
    render() {
        const { boss, selectBoss } = this.props;
        const __selectBoss = (boss) => {
            return () => {

            }
        }
        return (
            <div className="boss">
                <span className="name">{boss.name}</span>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => state;
const mapDispatcherToProps = (dispatcher, ownProps) => ({
    selectBoss: (boss) => {
        dispatcher({
            type: "SELECT_BOSS"
        })
    }
});
const __Boss = connect(mapStateToProps, mapDispatcherToProps)(Boss);

export default __Boss;

