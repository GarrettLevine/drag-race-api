import React from 'react';

import './Wrapper.scss';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}
