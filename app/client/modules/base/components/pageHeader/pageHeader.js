
import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { connect } from 'react-redux';

import EditBuyable from './../other/editBuyable';


/**
 * This is the basic description of the PageHeader component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageHeader extends Component {
    render() {
        const { character, showEditRaceDialog, newCharacter } = this.props;
        const { name, race } = character;
        const { title, skillPoints } = race;

        return (
            <div className="page-one__page-header">
                <input className="page-one__page-header__name" defaultValue={name} />
                <span className="page-one__page-header__race" onClick={showEditRaceDialog}>{race.title}</span>
            </div >
        );
    }
}

PageHeader.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string.isRequired,
    /**
     * A required character property
     */
    character: shape({
        name: string.isRequired
    }).isRequired
}

PageHeader.defaultProps = {
    name: "component-pageHeader"
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatcherToProps = (dispatcher) => {
    return {
        showEditRaceDialog: () => {
            dispatcher({
                type: "SHOW_RACE_DIALOG"
            });
        }
    }
}

const __PageHeader = connect(mapStateToProps, mapDispatcherToProps)(PageHeader);


export default __PageHeader;

