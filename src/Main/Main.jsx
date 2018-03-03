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
            <MainHeader header="Main Page" subheader="Get werkin'" />
            <Checkbox
              elimination
              id="alaska"
              name="queens"
              value="aLAKSA"
              label="ALASKAAARRR"



            />
            <Greeting />
            <Demo />
            <DonateCallToAction />
            <MainFooter />
      </Wrapper>
    );
  }
}
