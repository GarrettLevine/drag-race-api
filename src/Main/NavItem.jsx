import React from 'react';

import './NavItem.scss';

export default class NavItem extends React.Component { 
    render(){
        return(
            <li className="navitem">
                <a className="navitem_link" href={this.props.target}>{this.props.name}</a>
            </li>
            );
    }
}
