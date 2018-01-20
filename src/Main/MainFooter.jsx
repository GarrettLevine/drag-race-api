import React from 'react';

import './MainFooter.scss';

import { Tag } from '../components';

export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_background-container">
          <div className="section">
            <p class="footer_heading">
              Meet the Queens:
            </p>
            <div class="footer_tagholder">
              <Tag color="pink" content={<a href="#">@GarretLevine</a>} />
              <Tag color="pink" content={<a href="#">@KevanH</a>} />
              <Tag color="pink" content={<a href="#">@SeafoamGreenway</a>} />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}