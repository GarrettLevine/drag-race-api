import React from 'react';

import '../styles/imports.scss';
import './main.scss';

import { Header, Wrapper, Button } from '../components';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <Header header="Main Page" subheader="Get werkin'" />

            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              class="checkbox"
              />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              class="checkbox_elimination"
              />  

            <Button label="Push me" />

      </Wrapper>
    );
  }
}
