import React from 'react';

import './Checkbox.scss';

export default class Checkbox extends React.Component {
    
    render() {
        return (
         <label className='checkbox-label'for={this.props.id}>
           <input
            id={this.props.id}
            name={this.props.name}
            type="checkbox"
            onChange={this.props.handleChange} 
            className={this.props.class}
            value={this.props.value}/>
            {this.props.label}
        </label>
        );
    }
}
