import React from 'react';

import { fetch } from '../utils';
import { sortQueens } from './utils';

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonId: 0,
      activeQueens: [],
      eliminateQueens: [],
    };
  }
  componentDidMount() {
    fetch.get('/api/seasons')
      .then((seasons) => {
        const seasonId = seasons.sort((a, b) => b.id - a.id)[0].id;
        this.setState({
          seasonId,
        });

        return sortQueens(seasonId);
      })
      .then(({ inactiveQueens, activeQueens }) => {

        this.setState({
          activeQueens,
          inactiveQueens,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div> ADD EPISODE </div>
    );
  }
}