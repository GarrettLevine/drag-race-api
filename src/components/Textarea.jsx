import React from 'react';


export default class Textarea extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		value: '',
  	}
  }

  render() {
    return (
      <textarea className="textarea" id={this.props.id} placeholder={this.props.placeholder} value={this.state.value}></textarea>
    );
  }
}