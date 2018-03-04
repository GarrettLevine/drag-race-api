import React, { Component, Fragment as Dragment} from 'react';
import Select from 'react-select';

import { Checkbox } from '../components';

import '../styles/react-select.scss';
import './Queens.scss';

export default class Queens extends Component {

  render() {

    const queensForSelect = this.props.inactiveQueens.map(queen => {
      return {
        label: queen.name,
        value: queen.name
      }
    })

    return (
      <Dragment>
        <fieldset className="queens">
          <h2>Queens</h2>
          <p>Select Eliminated Queen(s)
          
          { this.props.eliminatedQueens.length 
            ? 
              <span className="selected"> - {this.props.eliminatedQueens.length} Selected</span> 
            : 
              null 
          }

          </p>
          
          <div className="checkboxes">
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
          </div>
        </fieldset>
<<<<<<< HEAD
        <Dropdown 
          options={this.props.inactiveQueens}
          text={'Bring Back a Girl'}
          handleDropdownSelect={this.props.bringBackQueen}
=======
        <div style={{width: "300px"}}>
        <Select
            name="demo-api-select"
            onChange={this.props.bringBackQueen}
            options={queensForSelect}
            placeholder="Bring Back A Girl"
            className="queens-dropdown"
>>>>>>> a2eb1acaf68d4b3dc6d62b6e8c1d0d07b57cd09d
        />
        </div>
      </Dragment>
    );
  }
}
