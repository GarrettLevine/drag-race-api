import React from 'react';

import './Textarea.scss';

export default class Textarea extends React.Component {
  render() {
      return (
      	<label htmlFor={this.props.id} className="textarea-input-label"}{this.props.label}</label>
        <textarea id={this.props.id} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleChange}></textarea>
      );
    };
  
};


