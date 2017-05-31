import React, { Component } from 'react';

class PageContainer extends Component {
    render() {
        return (
            <div className={"page-container" + (this.props.className ? " " + this.props.className : "")}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer;