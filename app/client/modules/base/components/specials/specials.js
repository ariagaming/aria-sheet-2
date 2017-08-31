
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import { getSpecials } from './../../../character/helpers';
import EditSpecials from './editSpecials';


/**
 * This is the basic description of the Specials component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Specials extends Component {
    render() {
        const { character } = this.props;
        const specials = getSpecials(character);
        const pages = [
            { title: 'edit specials', content: <EditSpecials /> }
        ];

        return (
            <Container title="Specials" className="specials" pages={pages}>
                {
                    specials.map((special, i) => {
                        return (
                            <div key={i} className="row">
                                <span>({special.level})</span>
                                <span className="title">{special.title}</span>
                                <span>{special.description}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}


export default Specials;

