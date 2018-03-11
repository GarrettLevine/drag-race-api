import React from 'react';

import Queens from './Queens';
import Challenge from './Challenge';

import { adminSetup } from './utils';
import { Wrapper, Button } from '../components';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.eliminateQueen = this.eliminateQueen.bind(this);
    this.bringBackQueen = this.bringBackQueen.bind(this);
    this.renderChallenges = this.renderChallenges.bind(this);
    this.updateChallengeInput = this.updateChallengeInput.bind(this);
    this.updateChallengeType = this.updateChallengeType.bind(this);
    this.addQueenToChallenge = this.addQueenToChallenge.bind(this);
    this.addNewChallengeCard = this.addNewChallengeCard.bind(this);


    this.state = {
      seasonId: 0,
      activeQueens: [],
      inactiveQueens: [],
      eliminatedQueens: [],
      challenges: [ 
        {
          type: '',
          prize: '',
          description: '',
          winners: [
          ]
        }
      ],
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
            index={i}
            prize={challenge.prize}
            description={challenge.description}
            type={challenge.type}
            activeQueens= {this.state.activeQueens}
            handleChange={this.updateChallengeInput}
            chooseOption={this.updateChallengeType}
            addWinner={this.addQueenToChallenge}
            winners={challenge.winners}
        />
      )
    })
  }

  updateChallengeInput(e, key, i) {
    const newChallenges = [ ...this.state.challenges ];

    newChallenges[i][key] = e.target.value;

    this.setState({
      challenges: newChallenges,
    });
  }

  updateChallengeType(choice, i) {
    const newChallenges = [ ...this.state.challenges ];

    newChallenges[i].type = choice;

    this.setState({
      challenges: newChallenges,
    })
  }

  addQueenToChallenge(id, i) {
    const newChallenges = [ ...this.state.challenges ];

    if (!newChallenges[i].winners.includes(id)) {
      newChallenges[i].winners = [ ...newChallenges[i].winners, id];
    } else {
      newChallenges[i].winners = newChallenges[i].winners.filter(queenId => queenId !== id)
    }

    this.setState({
      challenges: newChallenges,
    });
  }

  addNewChallengeCard() {
    
  }

  render() {
    return (
      <Wrapper>
        <div>
          {this.state.loading && <img style={{width: "300px"}} src="assets/imgs/loading.gif" /> }
          <Queens
            activeQueens={this.state.activeQueens}
            inactiveQueens={this.state.inactiveQueens}
            eliminatedQueens={this.state.eliminatedQueens}
            eliminateQueen={this.eliminateQueen}
            bringBackQueen={this.bringBackQueen}
          />
          <h2>Challenges</h2>
          {this.renderChallenges()}
           <Button 
            add
            label="Add a Challenge"
            handleClick={this.addNewChallengeCard}
          />
        </div>
      </Wrapper>
    );
  }
}
