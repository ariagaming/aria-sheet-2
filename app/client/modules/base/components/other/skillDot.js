import React from 'react';

export default (source) => {
    return source ?
        <i className={"fa fa-circle " + source}></i> :
        <i className={"fa fa-circle-o"}></i>
}