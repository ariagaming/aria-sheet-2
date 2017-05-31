
import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the Dialog component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Dialog extends Component {

    render() {
        const { dialog, show, hideDialog, updateCharacter, turnPage } = this.props;
        const pages = (() => {
            if (this.props.children && this.props.children.length > 0) return null;
            else {
                return dialog ? (dialog.pages ? dialog.pages : null) : null;
            }
        })();
        const index = dialog ? dialog.index : 0;

        const onInforPageClick = (index) => {
            return () => turnPage(index);
        }
        const getContent = () => {
            // return nothing if there are no pages
            if (!pages || pages.length === 0) return <div>No Content</div>;
            // return the first page
            return React.cloneElement(pages[index].content, {});
        }
        const getTitle = () => {
            // return nothing if there are no pages
            if (!pages || pages.length === 0) return "Dialog";
            else return pages[index].title;
        }


        return (
            <div className={"dialog-container " + (show ? "show" : "")}>
                <div className="dialog">
                    <div className="dialog__header">
                        <span>{getTitle() || "Dialog"}</span>
                    </div>
                    <div className="dialog__content">
                        {
                            this.props.children ? this.props.children : getContent()
                        }
                    </div>
                    <div className="dialog__footer">

                        <div className="dialog__footer__pages">
                            {
                                (pages || this.props.children || []).map((p, i) => {
                                    return (
                                        <div key={i} className={"info-page " + (index === i ? "selected" : "")} onClick={onInforPageClick(i)}>
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
    }))
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
        },
        turnPage: (index) => {
            dispatcher({
                type: 'TURN_PAGE',
                payload: index
            });
        }
    }
}
const __Dialog = connect(mapStateToProps, mapDispatcherToProps)(Dialog);

export default __Dialog;


