import React from 'react';
import classNames from 'classnames';


import './Checkbox.scss';

export default class Checkbox extends React.Component {
    
    render() {
        return (
            <div className="checkbox-container">
               <input
                    id={this.props.id}
                    name={this.props.name}
                    type="checkbox"
                    onChange={this.props.handleChange} 
                    className={classNames('checkbox', this.props.className)}
                    value={this.props.value}/>
                <label className='checkbox-label' htmlFor={this.props.id}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}
