import React from 'react';

import Queens from './Queens';
import Challenge from './Challenge';

import { adminSetup } from './utils';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.eliminateQueen = this.eliminateQueen.bind(this);
    this.bringBackQueen = this.bringBackQueen.bind(this);
    this.renderChallenges = this.renderChallenges.bind(this);

    this.state = {
      seasonId: 0,
      activeQueens: [],
      inactiveQueens: [],
      eliminatedQueens: [],
      challenges: [ 
        {
          type: "Main",
          prize: "Cash",
          description: "Reading Challenge",
          winners: [
            1,
            2,
          ]

        }
      ]
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

  renderChallenges() {
    return this.state.challenges.map((challenge, i) => {
      return (
        <Challenge
            key={i}
            prize={challenge.prize}
            description={challenge.description}
            type={challenge.type}
            activeQueens= {this.state.activeQueens}

        />
      )
    })
  }

  render() {
    return (
      <div>
        <Queens 
          activeQueens={this.state.activeQueens}
          inactiveQueens={this.state.inactiveQueens}
          eliminatedQueens={this.state.eliminatedQueens}
          eliminateQueen={this.eliminateQueen}
          bringBackQueen={this.bringBackQueen}
        />
        {this.renderChallenges()}
      </div>
    );
  }
}