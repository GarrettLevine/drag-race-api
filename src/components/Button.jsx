import React from 'react';

import './Button.scss';

export default class Button extends React.Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.handleClick}>{this.props.label}</button>
        );
    }
}
