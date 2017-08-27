
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';

export default class NormalSpells extends Component {


    render() {
        const { categories } = this.props;

        const numberOfSpells = categories.reduce((acc, cat) => acc + cat.spells.length, 0);
        if (numberOfSpells === 0) return null;

        return (
            <div>
                {
                    categories.map((category, j) => {

                        return (
                            <div key={j}>
                                <h2>{category.title}</h2>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Level</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            category.spells.map((spell, i) => (
                                                <tr className="row" key={i}>
                                                    <td className="title">{spell.level}</td>
                                                    <td className="title">{spell.title}</td>
                                                    <td className="">{spell.description}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )

                    })
                }
            </div>
        )
    }

}