
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
        const { character, showEditRaceDialog, showEditProfessionDialog, changeName, newCharacter } = this.props;
        const { name, race, classes } = character;
        const { title, skillPoints } = race;
        const changeCharacterName = (event) => {
            changeName(event.target.value);
        }

        return (
            <div className="page-one__page-header">
                <input className="page-one__page-header__name" value={name} onChange={changeCharacterName} />
                <span className="page-one__page-header__race" onClick={showEditRaceDialog}>{race.title}</span>
                <span className="page-one__page-header__level">{character.level}</span>
                <span className="page-one__page-header__profession" onClick={showEditProfessionDialog}>{classes.map(c => c.title).join(", ")}</span>
            </div>
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
        },
        showEditProfessionDialog: () => {
            dispatcher({
                type: "SHOW_PROFESSION_DIALOG"
            });
        },
        changeName: (name) => {
            dispatcher({
                type: "CHANGE_NAME",
                payload: name
            })
        }
    }
}

const __PageHeader = connect(mapStateToProps, mapDispatcherToProps)(PageHeader);


export default __PageHeader;

