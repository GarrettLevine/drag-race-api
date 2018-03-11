import React from 'react';

import './Radio.scss';

class Radio extends React.Component{ 
  renderRadio() {
    return this.props.options.map((option) => {
      const isChecked = option.value === this.props.chosen;

      return (
        <div className="radio-button" key={option.value}>
          <input
              id={option.label}
              type="radio"
              onChange={() => { this.props.handleChoice(option.value); }}
              value={option.value}
              checked={isChecked}
            />
          <label htmlFor={option.label}>{option.label}</label>
        </div>
      );
    });
  }

  render() {
    return (
      <fieldset>
        {this.renderRadio()}
      </fieldset>
    )
  }
}

export default Radio;
