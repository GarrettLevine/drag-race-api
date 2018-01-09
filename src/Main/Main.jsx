import React from 'react';

import LandingHeader from './LandingHeader';

import './main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <LandingHeader header="Main Page" subheader="Get werkin'" />
    );
  }
}