import React from 'react';

import './Queens.scss';

import { Checkbox } from '../components';

export default class Queens extends React.Component {

  render() {
    return (
      <fieldset className="queens">
        <h2>Queens</h2>
        <p>Select Eliminated Queen(s) - <span>{this.props.eliminatedQueens.length} Selected</span></p>
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
        <a href="#" className="girl">Bring back a Girl</a>
      </fieldset>
    );
  } 
}
