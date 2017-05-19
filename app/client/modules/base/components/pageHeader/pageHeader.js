
import React, { Component } from 'react';
import { string, shape } from 'prop-types';

/**
 * This is the basic description of the PageHeader component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageHeader extends Component {
    render() {
        const { name } = this.props.character;
        return (
            <div className="page-one__page-header">
                <input className="page-one__page-header__name" defaultValue={name} />
            </div>
        );
    }

}

PageHeader.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string.isRequired,
    /**
     * A required character property
     */
    character: shape({
        name: string.isRequired
    }).isRequired
}

PageHeader.defaultProps = {
    name: "component-pageHeader"
}


export default PageHeader;

