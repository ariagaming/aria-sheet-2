
import React, { Component } from 'react';

export default class Page extends Component {
    render() {
        const show = !!this.props.show;
        return <div className={"dialog-page" + (show ? " show" : "")}>{this.props.children}</div>
    }
}