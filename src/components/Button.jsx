import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export default class Button extends React.Component {
    render() {
        return (
        	//for solid pink button, add prop submit
        	//for "add" grey buttons, add NO submit prop
        	<div>
            	<button 
            		className={classNames('button',  this.props.className, {
        	    		button_add: !this.props.submit,
        	    		button_submit: this.props.submit,
        			})} 
        			onClick={this.props.handleClick}>
        				{this.props.label}
        		</button>
            </div>
        );
    }
}
