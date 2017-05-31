
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import EditBuyable from './../other/editBuyable';

/**
 * This is the basic description of the Skills component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Skills extends Component {
    render() {
        const { skills } = this.props.character;
        const Fill = source => <i className={"fa fa-circle " + source}></i>;
        const Empty = <i className="fa fa-circle-o"></i>;
        const pages = [
            { title: 'edit buyable', content: <EditBuyable prop="skills" source="xp" /> }
        ]

        return (
            <Container className="skills" title="Skills" pages={pages}>
                {
                    skills.map((skill, i) => {
                        const { bought, expertise, title, stat, total } = skill;
                        return (
                            <div key={i} className="row">
                                {bought ? Fill(bought) : Empty}
                                {expertise ? Fill(expertise) : Empty}
                                <span className="total">{total || 0}</span>
                                <span className="title">{title}</span>
                            </div>
                        )
                    })
                }


            </Container>
        );
    }
}


Skills.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Skills.defaultProps = {
    name: "component-skills"
}

export default Skills;

