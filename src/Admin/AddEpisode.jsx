import React, { Fragment as Dragment } from 'react';

import './AddEpisode.scss';

import Queens from './Queens';

import DatePicker from '../components/DatePicker';

import { adminSetup } from './utils';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.eliminateQueen = this.eliminateQueen.bind(this);
    this.bringBackQueen = this.bringBackQueen.bind(this);
    this.getThursday = this.getThursday.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      seasonId: 0,
      activeQueens: [],
      inactiveQueens: [],
      eliminatedQueens: [],
      episodeDate: '',
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

      this.getThursday();
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

  getThursday() {
    const d = new Date();
    let dnum = d.getDay();
    const diff = d.getDate() - dnum + ( dnum == 0 ? 0 : 4 ); // adjust when day is Thursday
    const thurs = new Date(d.setDate(diff));

    let month = '' + (thurs.getMonth() + 1);
    let day = '' + thurs.getDate();
    let year = thurs.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var lastThursday = [year, month, day].join('-');

    this.setState( prevState => ({
      episodeDate: lastThursday
    }));
  }

  handleDateChange(e) {
    this.setState({
      episodeDate: e.target.value
    });
  }

  render() {
    return (
      <Dragment>

        <DatePicker 
          episodeDate={this.state.episodeDate}
          handleChange={this.handleDateChange}
        />

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
