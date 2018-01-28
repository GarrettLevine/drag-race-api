import React from 'react';

import './TextInput.scss';

export default class TextInput extends React.Component {  
  render() {
    return (
      <input type="text" value={this.props.value} id={this.props.id} onChange={this.props.handleChange} />
    )
  }
}
