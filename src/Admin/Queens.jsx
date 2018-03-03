import React, { Component, Fragment as Dragment} from 'react';

import './Queens.scss';

import { Checkbox, Dropdown } from '../components';

export default class Queens extends Component {

  render() {
    return (
      <Dragment>
        <fieldset className="queens">
          <h2>Queens</h2>
          <p>Select Eliminated Queen(s)

          { this.props.eliminatedQueens.length &&
              <span className="selected"> - {this.props.eliminatedQueens.length} Selected</span>
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
        <Dropdown
          options={this.props.activeQueens}
          text={'Bring Back a Girl'}
          handleDropdownSelect={this.props.bringBackQueen}
        />
      </Dragment>
    );
  }
}
