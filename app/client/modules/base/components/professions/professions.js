
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import EditBuyable from './../other/editBuyable';
import SkillDot from './../other/skillDot';

/**
 * This is the basic description of the Professions component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Professions extends Component {
    render() {
        const { professions } = this.props.character;

        const pages = [
            { title: 'page 01', content: <EditBuyable prop="professions" source="xp" /> }
        ];


        return (
            <Container className="bordered professions" title="Professions" pages={pages}>
                {
                    professions.map((profession, i) => {
                        const { bought, expertise, title, stat, total } = profession;
                        return (
                            <div key={i} className="row">
                                {SkillDot(bought)}
                                {SkillDot(expertise)}
                                <span className="total">+{total || 0}</span>
                                <span>{title}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}


Professions.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Professions.defaultProps = {
    name: "component-skills"
}

export default Professions;
