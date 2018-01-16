import React from 'react';

import '../styles/imports.scss';
import './main.scss';

import { Header, Wrapper, Button, Checkbox } from '../components';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <Header header="Main Page" subheader="Get werkin'" />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate"
              />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate1"
              />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate2"
              />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate3"
              />  
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate4"
              />
            <Checkbox 
              label="Kennedy Davenport" 
              name="eliminatedQueens" 
              className="checkbox"
              id="kennedyeliminate5"
              />  
      </Wrapper>
    );
  }
}
