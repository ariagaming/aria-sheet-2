
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import EditFeats from './editFeats';

/**
 * This is the basic description of the Feats component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Feats extends Component {
    render() {
        const { feats } = this.props.character;
        const Fill = <i className="fa fa-circle"></i>
        const Empty = <i className="fa fa-circle-o"></i>

        const pages = [
            { title: 'Edit Feats', content: <EditFeats source="xp" /> }
        ];

        return (
            <Container className="bordered feats" title="Feats" pages={pages}>
                {
                    feats.map((skill, i) => {
                        const { rank, bought, title, stat, total, sign, unit } = skill;
                        return (
                            <div key={i} className="row">
                                <span className="rank">{bought || 0}</span>
                                <span className="total-desc">{sign || ""}{total || 0}{unit || ""}</span>
                                <span className="">{title}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}


Feats.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Feats.defaultProps = {
    name: "component-feats"
}

export default Feats;

