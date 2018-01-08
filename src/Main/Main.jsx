import React from 'react';

import { Header } from '../components'

import './main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div>
      	<Header header="Main Page" subheader="Get werkin'" />
      </div>
    );
  }
}