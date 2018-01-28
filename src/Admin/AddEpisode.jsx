import React from 'react';

import Queens from './Queens';

import { adminSetup } from './utils';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.eliminateQueen = this.eliminateQueen.bind(this);

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
    if (!!this.state.eliminatedQueens.find(eQueen => eQueen.id === queen.id)) {
      this.setState( prevState => ({ 
        eliminatedQueens: prevState.eliminatedQueens.filter(eQueen => eQueen.id !== queen.id)
      }));
    } else {
      this.setState( prevState => ({
        eliminatedQueens: [...prevState.eliminatedQueens, queen]
      }));
    }
  }

  render() {
    return (
      <div>
        <Queens 
          activeQueens={this.state.activeQueens}
          inactiveQueens={this.state.inactiveQueens}
          eliminatedQueens={this.state.eliminatedQueens}
          eliminateQueen={this.eliminateQueen}
        />
      </div>
    );
  }
}