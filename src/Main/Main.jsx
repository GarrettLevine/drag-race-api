import React from 'react';

import './main.scss';

import { Header, Wrapper, Button, Checkbox } from '../components';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <Header header="Main Page" subheader="Get werkin'" />
            <Checkbox 
            id="challengequeen-trixiemattel"
            name="challengequeens"
            value="trixiemattel"
            className="checkbox_standard"
            label="Trixie Mattel"
            />
            <Checkbox 
            id="challengequeen-ninaflowers"
            name="challengequeens"
            value="ninaflowers"
            className="checkbox_elimination"
            label="Nina Flowers"
            />
      </Wrapper>
    );
  }
}
