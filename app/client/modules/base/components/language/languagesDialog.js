
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * 
 */
class LanguagesDialog extends Component {

    componentWillMount() {
        this.setState({ language: '' });
    }

    render() {
        const { newCharacter, addLanguage, removeLanguage, renameLanguage, buyLanguage } = this.props;
        if (!newCharacter) return null;

        const { languages } = newCharacter;
        const exp = newCharacter.expertise.total;
        const Fill = source => <i className={"fa fa-circle " + source}></i>;
        const Empty = <i className="fa fa-circle-o"></i>;

        const typeLanguage = (event) => {
            this.setState({ language: event.target.value });
        }
        const __addLanguage = () => {
            if (this.state.language.length > 1) {
                addLanguage(this.state.language);
                this.setState({ language: '' });
            }
        }
        const __removeLanguage = language => {
            return () => {
                removeLanguage(language.title);
            }
        }
        const __buyLanguage = language => {
            return () => {
                buyLanguage(language);
            }
        }
        const __renameLanguage = index => {
            return (event) => {
                renameLanguage(index, event.target.value);
            }
        }

        return (
            <div className="languages-dialog">
                {
                    languages.map((language, i) => {
                        const { bought, expertise, title } = language;
                        return (
                            <div key={i} className="row" onClick={__buyLanguage(language)}>
                                <span onClick={__removeLanguage(language)}><i className="fa fa-times"></i></span>
                                {bought ? Fill(bought) : Empty}
                                {expertise ? Fill(expertise) : Empty}
                                <span className="total">{expertise ? exp : 0}</span>
                                <input value={title} onChange={__renameLanguage(i)} />
                                {/*<span className="title">{title}</span>*/}
                            </div>
                        )
                    })
                }
                <input onChange={typeLanguage} value={this.state.language} />
                <button onClick={__addLanguage}>Add Language</button>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        addLanguage: (language) => {
            dispatcher({
                type: 'ADD_LANGUAGE',
                payload: language
            });
        },
        removeLanguage: (language) => {
            dispatcher({
                type: "REMOVE_LANGUAGE",
                payload: language
            });
        },
        buyLanguage: (language) => {
            dispatcher({
                type: "BUY_LANGUAGE",
                payload: language
            })
        },
        renameLanguage: (index, newValue) => {
            dispatcher({
                type: 'RENAME_LANGUAGE',
                payload: {
                    index: index,
                    title: newValue
                }
            });
        }
    }
}
const __LanguagesDialog = connect(mapStateToProps, mapDispatcherToProps)(LanguagesDialog);

export default __LanguagesDialog;
