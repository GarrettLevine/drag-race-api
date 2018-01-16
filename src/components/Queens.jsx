import React from 'react';

import './Queens.scss';

export default class Queens extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      remainingQueens: ['a','b','c','d'],
      eliminatedQueens: ['e','f','g'],
      selected: 0,
    }
  }

  // componentDidMount() {
  //   this.setState({remainingQueens: this.props.remainingQueens.concat() })
  // }

  // toggleCheckbox = () => {
  //   // hmm
  // }

  // bringBackAGirl = () => {
  //   // hmmmmmmm
  // }

  render() {
    return (
      <fieldset className="queens">
        <h2>Queens</h2>
        <p>Select Eliminated Queen(s) - <span>{this.state.selected} Selected</span></p>
        {this.state.remainingQueens.map((queen, i) => {
          // return <Checkbox 
          //         queen={queen} 
          //         key={i} 
          //         handleCheckboxChange={this.toggleCheckbox}
          //        />
          return queen;
        })}
        <a href="#" className="girl">Bring back a Girl</a>
      </fieldset>
    );
  } 
}
