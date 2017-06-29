import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={"page" + (className ? ` ${className}` : '')}>
                <div className="page-content">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}
export default Page;
