
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpells } from './../../../character/helpers';
import FlatButton from 'material-ui/FlatButton';

export default class SpecialsSpells extends Component {


    render() {
        const { categories } = this.props;
        if (!categories) return null;

        const numberOfSpells = categories.reduce((acc, cat) => acc + cat.spells.length, 0);
        if (numberOfSpells === 0) return null;

        return (
            <div>
                {
                    categories.map((category, j) => {
                        if (category.spells.length === 0) return null;
                        return (
                            <div key={j} style={{ marginTop: "1cm" }}>
                                <h2>{category.title} {this.props.title || ""}</h2>

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