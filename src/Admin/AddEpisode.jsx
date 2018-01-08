import React from 'react';

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
    fetch('/api/seasons')
      .then((resp) => resp.json())
      .then((seasons) => {
        const seasonId = seasons.sort((a, b) => b.id - a.id)[0].id;
        this.setState({
          seasonId,
        });

        return fetch(`/api/seasons/${seasonId}/queens`);
      })
      .then((resp) => resp.json())
      .then((queens) => {

      });
  }

  render() {
    return (
      <div> ADD EPISODE </div>
    );
  }
}