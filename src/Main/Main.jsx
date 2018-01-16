import React from 'react';

import { Header, Queens, Wrapper } from '../components';

import './main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <Header header="Main Page" subheader="Get werkin'" />
            <Queens />
      </Wrapper>
    );
  }
}
