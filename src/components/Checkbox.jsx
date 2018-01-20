import React from 'react';
import classNames from 'classnames';


import './Checkbox.scss';

export default class Checkbox extends React.Component {
    
    render() {
        return (
            //for blue check, give className checkbox_standard
            //for red cross-out, give className checkbox_elimination
            <div className={classNames('checkbox-container',  this.props.className)}>
               <input
                    id={this.props.id}
                    className='checkbox'
                    name={this.props.name}
                    type="checkbox"
                    onChange={this.props.handleChange} 
                    value={this.props.value}/>
                <label className='checkbox-label' htmlFor={this.props.id}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}
