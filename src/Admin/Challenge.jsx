import React from 'react';
import PropTypes from 'prop-types';

import './Challenge.scss';

import { TextInput, Textarea, Checkbox, Button, Radio } from '../components';

const propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  prize: PropTypes.string,
  activeQueens: PropTypes.arrayOf(PropTypes.shape({
  	id: PropTypes.number,
  	name: PropTypes.string,
  })),
  handleChange: PropTypes.func,
};

class Challenge extends React.Component {
  render() {
    return (
      	<div className="add-challenge-card">
	        <Radio
	          handleChoice={(e) => {
	          	this.props.chooseOption(e, this.props.index)
	          }}
	          chosen={this.props.type}
	          options= {[
	          	{label: "Main", value: "Main"},
	          	{label: "Mini", value: "Mini"}
	          ]}
	        />
	        <TextInput
	        	value={this.props.prize}
	        	handleChange={(e) => {
	        		this.props.handleChange(e, 'prize', this.props.index);
	        	}}
	        />
	        <Textarea 
	        	value={this.props.description}
	        	label="Description" 
	        	placeholder="Description" 
	        	handleChange = {(e) => {
	        		this.props.handleChange(e, 'description', this.props.index);
	        	}}
	        />
	        <p>Select Challenge Winner(s)
	        	{ this.props.winners.length &&
	        	    <span className="selected"> - {this.props.winners.length} Selected</span>
	        	}
	        </p>
	        {this.props.activeQueens.map((queen) => {
	            return (
	              <Checkbox 
	                standard
	                key={queen.id}
	                id={`challenges_${queen.id}`}
	                name={queen.name}
	                label={queen.name}
	                handleChange={() => {
	                	this.props.addWinner(queen.id, this.props.index)
	                }}
	              />
	            )
	          })}
      	</div>
    );
  } 
}

Challenge.propTypes = propTypes;

export default Challenge;
