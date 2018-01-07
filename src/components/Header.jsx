import React from 'react';

import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="header">{this.props.header}</h1>
        <h2 className="subheader">{this.props.subheader}</h2>
      </div>
    );
  }
}
