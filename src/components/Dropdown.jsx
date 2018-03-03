import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Dropdown.scss';

const defaultProps = {
  options: [],
  label: 'Choose something',
};
//This component's option prop is an object with an id and a name property
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.state = {
      isActive: false,
      label: this.props.label,
      text: this.props.text
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.text });
  }

  show() {
    this.setState({ isActive: true });
  }

  hide() {
    this.setState({ isActive: false });
  }

  render() {
    const options = this.props.options.map((option) => {
      return (
        <div
          key={option.id}
          className="dropdown-item"
          onClick={() => {this.props.handleDropdownSelect(option)}}
        >
          {option.name}
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
            <span>{this.state.text}</span>
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

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  text: PropTypes.string,
  handleDropdownSelect: PropTypes.func.isRequired
}
