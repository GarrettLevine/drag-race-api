import React from 'react';
import classNames from 'classnames';


import './Checkbox.scss';

export default class Checkbox extends React.Component {

    render() {
        return (
            //for red cross-out, passs prop elimination
            <div className={classNames('checkbox-container', {
                'checkbox_standard': !this.props.elimination,
                'checkbox_elimination': this.props.elimination,
            } )}>
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
