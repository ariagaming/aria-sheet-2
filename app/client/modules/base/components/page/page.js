import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {

    render() {
        //const clone = { ...this.props };
        return (
            <div className="page">
                {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, this.props);
                    })
                }
            </div>
        )
    }
}
export default Page;