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
            loading: false,
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
      this.setState(prevState => ({
        eliminatedQueens: prevState.eliminatedQueens.filter(eQueen => eQueen.id !== queen.id)
      }));
    } else {
      this.setState(prevState => ({
        eliminatedQueens: [...prevState.eliminatedQueens, queen]
      }));
    }
  }

  bringBackQueen(queen) {
    this.setState(prevState => ({
      activeQueens: [...prevState.activeQueens, queen]
    }));
  }

  getThursday() {
    const today = new Date();
    const lastSunday = today.setDate(today.getDate() - today.getDay());
    const lastThursday = new Date(lastSunday - 259200000);

    let month = '' + (lastThursday.getMonth() + 1);
    let day = '' + lastThursday.getDate();
    const year = lastThursday.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    const formattedThursday = [year, month, day].join('-');

    this.setState(prevState => ({
      episodeDate: formattedThursday
    }));
  }

  handleDateChange(e) {
    console.log(e.target.value);
    this.setState({
      episodeDate: e.target.value
    });
  }

  render() {
    return (
      <Dragment>

        <DatePicker
          episodeDate={this.state.episodeDate}
          heading={this.props.heading}
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