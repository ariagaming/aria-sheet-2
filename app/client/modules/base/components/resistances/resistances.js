
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import EditBuyable from './../other/editBuyable';

/**
 * This is the basic description of the Resistances component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Resistances extends Component {
    render() {
        const { resistances } = this.props.character;
        const Fill = source => <i className={"fa fa-circle " + source}></i>;
        const Empty = <i className="fa fa-circle-o"></i>;
        const pages = [
            { title: 'edit buyable', content: <EditBuyable prop="resistances" source="xp" /> }
        ]

        return (
            <Container className="bordered resistances" title="Resistances" pages={pages}>
                {
                    resistances.map((skill, i) => {
                        const { bought, expertise, title, stat, total } = skill;
                        return (
                            <div key={i} className="row">
                                {bought ? Fill(bought) : Empty}
                                {expertise ? Fill(expertise) : Empty}
                                <span className="title">{title}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}

export default Resistances;

