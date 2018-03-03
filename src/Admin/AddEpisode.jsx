import React, { Fragment as Dragment } from 'react';

import './AddEpisode.scss';

import Queens from './Queens';

import { adminSetup } from './utils';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.eliminateQueen = this.eliminateQueen.bind(this);
    this.bringBackQueen = this.bringBackQueen.bind(this);

    this.state = {
      seasonId: 0,
      activeQueens: [],
      inactiveQueens: [],
      eliminatedQueens: [],
    };
  }
  
  componentDidMount() {
      adminSetup()
        .then(({ activeQueens, inactiveQueens, seasonId }) => {

          this.setState({
            activeQueens,
            inactiveQueens,
            seasonId,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  }

  eliminateQueen(queen) {
    const queenIsEliminated = !!this.state.eliminatedQueens.find(eQueen => eQueen.id === queen.id);
    
    if (queenIsEliminated) {
      this.setState( prevState => ({ 
        eliminatedQueens: prevState.eliminatedQueens.filter(eQueen => eQueen.id !== queen.id)
      }));
    } else {
      this.setState( prevState => ({
        eliminatedQueens: [...prevState.eliminatedQueens, queen]
      }));
    }
  }

  bringBackQueen(queen) {
    this.setState( prevState => ({
      activeQueens: [...prevState.activeQueens, queen]
    }));
  }

  render() {
    return (
      <Dragment>
        <Queens 
          activeQueens={this.state.activeQueens}
          inactiveQueens={this.state.inactiveQueens}
          eliminatedQueens={this.state.eliminatedQueens}
          eliminateQueen={this.eliminateQueen}
          bringBackQueen={this.bringBackQueen}
        />
      </Dragment>
    );
  }
}
