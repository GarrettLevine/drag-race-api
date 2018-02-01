import React from 'react';
import classNames from 'classnames';

import './Dropdown.scss';

const defaultProps = {
  options: [],
  label: 'Choose something',
};

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.state = {
      isActive: false,
      label: this.props.label,
    };
  }

  show() {
    this.setState({ isActive: true });
  }

  hide() {
    this.setState({ isActive: false });
  }

  render() {
    const options = this.props.options.map((queen) => {
      return (
        <div
          key={queen.id}
          className="dropdown-item"
          onClick={() => {this.props.bringBackQueen(queen)}}
        >
          {queen.name}
        </div>
      );
    });
    return (
      <div
        className={classNames('dropdown', {
          'is-active': this.state.isActive,
        })}
        onClick={() => {
          this.state.isActive ? this.hide() : this.show();
        }}
      >
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{this.props.text}</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {options}
          </div>
        </div>
      </div>
    );
  }
}
