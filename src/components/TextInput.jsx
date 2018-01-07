import React from 'react';

import './TextInput.scss';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
    }
  }
  
  render() {
    return (
      <input type="text" value={this.state.value} id={this.props.id} onChange={this.props.handleChange} />
    )
  }
}