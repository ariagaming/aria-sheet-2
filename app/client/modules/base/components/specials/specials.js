
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import { getSpecials } from './../../../character/helpers';
import EditSpecials from './editSpecials';
import _ from 'lodash';


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
        const construct = {
            lvl: character.level,
            STR: character.statistics.STR.bonus,
            AGI: character.statistics.AGI.bonus,
            INU: character.statistics.INU.bonus,
            PER: character.statistics.PER.bonus,
            INI: character.initiative.total,
            movement: character.movement.total,
            rank: 0
        };
        const getDescription = (string, rank) => {
            const __construct = { ...construct, rank: (rank || 0) };
            return _.template(string)(__construct);
        }

        return (
            <Container title="Specials" className="specials" pages={pages}>
                {
                    specials.map((special, i) => {
                        return (
                            <div key={i} className="row">
                                <span>({special.level || 1})</span>
                                <span className="title">{special.title}</span>
                                <span>{getDescription(special.description)}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}


export default Specials;

