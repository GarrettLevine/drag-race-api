import React from 'react';
import { Route } from 'react-router';

import { Header } from '../components';
import AddEpisode from './AddEpisode';

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <Header header="Admin Panel" subheader="great great great" />
        <Route path={`${this.props.match.url}/episode`} component={AddEpisode} />
      </div>
    );
  }
}