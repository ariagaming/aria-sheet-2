
import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

/**
 * This is the basic description of the Container component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Container extends Component {
    render() {
        const { className, title, onChangeShowDialog, pages } = this.props;

        const click = () => {
            onChangeShowDialog(pages);
        }

        return (
            <div className={"container " + (className || "")}>
                {this.props.children}
                <title>{title}</title>

                <div className="container__edit">
                    <i className="fa fa-pencil" onClick={click}></i>
                </div>
            </div>
        );
    }
}


Container.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string,
    /**
     * add extra classNames to the core container.
     */
    className: string,

    /**
     * The title of the container
     */
    title: string.isRequired
}

Container.defaultProps = {
    name: "component-container"
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        onChangeShowDialog: (pages) => {
            dispatcher({
                type: 'SHOW_DIALOG',
                value: {
                    pages: pages
                }
            });
        }
    }
}
const __Container = connect(mapStateToProps, mapDispatcherToProps)(Container);

export default __Container;

