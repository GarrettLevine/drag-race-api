import React from 'react';

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
    const options = this.props.options.map((o) => {
      return (
        <div
          key={o.id}
          className="dropdown-item"
          onClick={() => {
            this.setState({
              label: o.label,
            });
            this.props.handleChange(o.label);
          }}
        >
          {o.name}
        </div>
      );
    });
    return (
      <div
        className={this.state.isActive ? 'dropdown is-active' : 'dropdown'}
        onClick={() => {
          this.state.isActive ? this.hide() : this.show();
        }}
      >
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Bring Back a Girl</span>
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