import React from 'react';

import './Textarea.scss';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.updateDescription = this.updateDescription.bind(this);

    this.state = {
        challengeDescription: '',
    };
  };
  
  updateDescription(event) {
        this.setState({
            challengeDescription: event.target.value,
        });
    }

  render() {
      return (
        <textarea id={this.props.id} placeholder={this.props.placeholder} value={this.state.challengeDescription} onChange={this.updateDescription}></textarea>
      );
    };
  
};


