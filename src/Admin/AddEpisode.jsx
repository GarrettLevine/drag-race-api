import React from 'react';

import { adminSetup } from './utils';

import { Dropdown } from '../components'

export default class AddEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonId: 0,
      activeQueens: [],
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

  render() {
    return (
      <div>

        <Dropdown 
          options={this.state.activeQueens}
        /> 

      </div>
    );
  }
}