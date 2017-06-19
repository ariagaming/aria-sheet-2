
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './../page/page';
import { connect } from 'react-redux';
import Container from './../container/container';
import _ from 'lodash';


/**
 * This is the basic description of the PageTwo component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageTwo extends Component {
    render() {
        const { character } = this.props;
        const construct = {
            lvl: character.level,
            STR: character.statistics.STR.total,
            AGI: character.statistics.AGI.total,
            INU: character.statistics.INU.total,
            PER: character.statistics.PER.total
        };

        const getDescription = (string) => {
            return _.template(string)(construct);
        }

        return (
            <Page className="page-three">
                <div className="container">
                    {
                        character.spells.map((spell, i) => {
                            return (
                                <div key={i} className="row">
                                    <span className="title">{spell.title}:</span>
                                    <span>{getDescription(spell.description)}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </Page>
        );
    }
}





const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageTwo = connect(mapStateToProps)(PageTwo);

export default __PageTwo;

