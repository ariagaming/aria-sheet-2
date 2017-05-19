
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';

/**
 * This is the basic description of the Feats component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Feats extends Component {
    render() {
        const { feats } = this.props.character;
        const Fill = <i className="fa fa-circle"></i>
        const Empty = <i className="fa fa-circle-o"></i>
        return (
            <Container className="feats" title="Feats">
                {
                    feats.map((skill, i) => {
                        const { rank, title, stat, total, sign, unit } = skill;
                        return (
                            <div key={i} className="row">
                                <span className="rank">{rank || 0}</span>
                                <span className="total-desc">{sign || ""}{total || 0}{unit || ""}</span>
                                <span className="title">{title}</span>
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

