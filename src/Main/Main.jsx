import React from 'react';

import './main.scss';

import { Header, Wrapper} from '../components';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <Header header="Main Page" subheader="Get werkin'" />
      </Wrapper>
    );
  }
}
