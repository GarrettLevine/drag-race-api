import React from 'react';

import { adminSetup } from './utils';

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

  render() {
    return (
      <div> ADD EPISODE </div>
    );
  }
}