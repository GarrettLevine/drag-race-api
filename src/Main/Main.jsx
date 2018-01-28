import React from 'react';

import './main.scss';

import { Wrapper, Checkbox } from '../components';

import MainHeader from './MainHeader';
import Greeting from './Greeting';
import DonateCallToAction from './DonateCallToAction';
import MainFooter from './MainFooter';
import Demo from './Demo';
export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
          <Checkbox
            id="alaska"
            className="checkbox_eliminated"
            name="eliminatedQueens"
            value="Alaska"
            label="Alaska Thunderfuck"

          />
            <MainHeader header="Main Page" subheader="Get werkin'" />
            <Greeting />
            <Demo />
            <DonateCallToAction />
            <MainFooter />
      </Wrapper>
    );
  }
}
