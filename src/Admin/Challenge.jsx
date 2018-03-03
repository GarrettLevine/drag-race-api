import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, Textarea, Checkbox, Button } from '../components';

const propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  prize: PropTypes.string,
  activeQueens: PropTypes.arrayOf (PropTypes.shape({
  	id: PropTypes.number,
  	name: PropTypes.string,
  }))
};

class Challenge extends React.Component {
  render() {
    return (
      	<div class="add-challenge-card">
	        <Radio
	          handleChoice={this.props.chooseOption}
	          chosen={this.props.type}
	          options= {[
	          	{label: "Main", value: "Main"},
	          	{label: "Mini", value: "Mini"}
	          ]}
	        />
	        <TextInput
	        	value={this.props.prize}
	        />
	        <Textarea 
	        	label="Description" 
	        	placeholder="Description" 
	        	value={this.props.description}
	        />
	        <p>Select Challenge Winner(s)
		        { this.props.activeQueens.length ? 
		            <span className="selected"> -  Selected</span> 
		          : 
		            null 
		        }
	        </p>
	        {this.props.activeQueens.map((queen, i) => {
	            return (
	              <Checkbox 
	                standard
	                key={queen.id}
	                id={queen.id}
	                name={queen.name}
	                label={queen.name}
	              />
	            )
	          })}
	        <Button 
	        	add
	        	label="Add a Challenge"
	        />
      	</div>
    );
  } 
}

Challenge.propTypes = propTypes;

export default Challenge;
