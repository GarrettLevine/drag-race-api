import React from 'react';

import './MainFooter.scss';

import { Tag } from '../components';

export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_background-container">
          <div className="section">
            <p className="footer_heading">
              Meet the Queens:
            </p>
            <div className="footer_tagholder">
              <Tag color="pink" content={<a href="https://twitter.com/GarrettLevine">@GarretLevine</a>} />
              <Tag color="pink" content={<a href="https://twitter.com/KevanH">@KevanH</a>} />
              <Tag color="pink" content={<a href="https://twitter.com/seafoamgreenway">@SeafoamGreenway</a>} />
              <Tag color="pink" content={<a href="https://twitter.com/MRCJNK">@MRCJNK</a>} />
              <Tag color="pink" content={<a href="https://twitter.com/kibben">@KibBen</a>} />
              <Tag color="pink" content={<a href="https://twitter.com/meaghaneleanor">@meaghaneleanor</a>} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
