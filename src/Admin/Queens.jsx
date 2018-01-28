import React, { Component, Fragment as Dragment} from 'react';

import './Queens.scss';

import { Checkbox, TextInput } from '../components';

export default class Queens extends Component {

  render() {
    return (
      <Dragment>
        <TextInput />
        <fieldset className="queens">
          <h2>Queens</h2>
          <p>Select Eliminated Queen(s)
          
          { this.props.eliminatedQueens.length ? 
              <span className="selected"> - {this.props.eliminatedQueens.length} Selected</span> 
            : 
              null 
          }
            
          </p>
          {this.props.activeQueens.map((queen, i) => {
            return (
              <Checkbox 
                elimination
                key={queen.id}
                id={queen.id}
                name={queen.name}
                label={queen.name}
                value={!!this.props.eliminatedQueens.find(eQueen => eQueen.id === queen.id )}
                handleChange={() => { this.props.eliminateQueen(queen) }}
              />
            )
          })}
        </fieldset>
        <a className="bring-back" onClick={this.props.bringBack}>Bring back a Girl</a>
      </Dragment>
    );
  } 
}
