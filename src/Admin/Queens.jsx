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
        <div style={{width: "300px"}}>
          <Select
              name="demo-api-select"
              onChange={this.props.bringBackQueen}
              options={queensForSelect}
              placeholder="Bring Back A Girl"
              className="queens-dropdown"
          />
        </div>
      </Dragment>
    );
  }
}
