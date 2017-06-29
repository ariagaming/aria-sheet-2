
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterDefinition from './../../../character/definition';
import Container from './../container/container';
import LanguagesDialog from './languagesDialog';

/**
 * This is the basic description of the Language component. This will be shown in the
 * documentation of the component in the StyleGuilde. 
 */
class Language extends Component {
    render() {
        const { languages } = this.props.character;
        const Fill = source => <i className={"fa fa-circle " + source}></i>;
        const Empty = <i className="fa fa-circle-o"></i>;
        const pages = [
            { title: "Edit Languages", content: (<LanguagesDialog />) }
        ]

        return (
            <Container className="bordered languages" title="languages" pages={pages}>
                {
                    languages.map((language, i) => {
                        const { bought, expertise, title, stat, total } = language;
                        return (
                            <div key={i} className="row">
                                {bought ? Fill(bought) : Empty}
                                {expertise ? Fill(expertise) : Empty}
                                <span className="total">{total || 0}</span>
                                <span>{title}</span>
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}


Language.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string,
    character: characterDefinition.isRequired
}

Language.defaultProps = {
    name: 'component-language'
}

export default Language;

