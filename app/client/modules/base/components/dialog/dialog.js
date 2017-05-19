
import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the Dialog component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Dialog extends Component {

    componentWillMount() {
        this.setState({ index: 0 });
    }

    render() {

        const { dialog, show, hideDialog, updateCharacter, title } = this.props;
        const pages = dialog ? (dialog.pages ? dialog.pages : []) : [];

        const getContent = () => {
            // return nothing if there are no pages
            if (!pages || pages.length === 0) return <div>No Content</div>;
            // return the first page
            const page = React.cloneElement(pages[this.state.index].content, {
                character: this.props.character,
                newCharacter: JSON.parse(JSON.stringify(this.props.character))
            });
            return page;
        }

        return (
            <div className={"dialog-container " + (show ? "show" : "")}>
                <div className="dialog">
                    <div className="dialog__header">
                        <span>{title || "Dialog"}</span>
                    </div>
                    <div className="dialog__content">
                        {
                            getContent()
                        }
                    </div>
                    <div className="dialog__footer">

                        <div className="dialog__footer__pages">
                            {
                                pages.map((p, i) => {
                                    return (
                                        <div key={i} className="info-page" onClick={() => this.setState({ ...this.state, index: i })}>
                                            <span>{i + 1}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="dialog__footer__buttons">
                            <button onClick={updateCharacter}><i className="fa fa-check"></i>OK</button>
                            <button onClick={hideDialog}><i className="fa fa-remove"></i>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


Dialog.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string,
    title: string,
    pages: arrayOf(shape({
        title: string.isRequired
    })).isRequired
}

Dialog.defaultProps = {
    name: 'component-dialog'
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        hideDialog: () => {
            dispatcher({
                type: 'HIDE_DIALOG'
            });
        },
        updateCharacter: () => {
            dispatcher({
                type: 'UPDATE_CHARACTER'
            });
        }
    }
}
const __Dialog = connect(mapStateToProps, mapDispatcherToProps)(Dialog);

export default __Dialog;


