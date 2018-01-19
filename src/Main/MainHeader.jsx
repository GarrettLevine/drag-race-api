import React from 'react';

import './MainHeader.scss';

import NavItem from './NavItem';

export default class Header extends React.Component {
  render() {
    return (
      <header className="mainheader">
        <div className="mainheader_logo">
            <img src="/assets/imgs/logo.png" className="mainheader_logo-img"/>
        </div>
        <nav className="mainheader_nav">
            <ul className="navlist">
                <NavItem 
                    target="https://drag-race-api.readme.io/docs"
                    name="Documentation"
                />
                <NavItem 
                    target="https://github.com/GarrettLevine/drag-race-api/"
                    name="Download"
                />
            </ul>
        </nav>
      </header>
    );
  }
}
