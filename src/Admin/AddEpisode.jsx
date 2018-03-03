import React from 'react';

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
      loading: true,
    };
  }

  componentDidMount() {
      adminSetup()
        .then(({ activeQueens, inactiveQueens, seasonId }) => {

          this.setState({
            activeQueens,
            inactiveQueens,
            seasonId,
            loading: false,
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

  bringBackQueen(returningQueen) {
    const queenToAdd = this.state.inactiveQueens.find(queen => queen.name === returningQueen.label)
    this.setState( prevState => ({
      activeQueens: [...prevState.activeQueens, queenToAdd]
    }));
  }

  render() {
    return (
      <div>
        {this.state.loading && <img style={{width: "300px"}} src="assets/imgs/loading.gif" /> }
        <Queens
          activeQueens={this.state.activeQueens}
          inactiveQueens={this.state.inactiveQueens}
          eliminatedQueens={this.state.eliminatedQueens}
          eliminateQueen={this.eliminateQueen}
          bringBackQueen={this.bringBackQueen}
        />
      </div>
    );
  }
}
