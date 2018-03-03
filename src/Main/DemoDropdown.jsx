import React from 'react';
import styleSelect from 'styleselect';

import './DemoDropdown.scss';

export default class DemoDropdown extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: 'queens'
        }
        this.change = this.change.bind(this);
    }

    componentDidMount(){
        styleSelect('select.demo_dropdown')
    }

    change(event) {
        this.setState({value: event.target.value})
        this.props.handleChange();
    }

   render() {
     return(
            <select value={this.state.value} name="demo-options" onChange={()=> console.log('yes')} className="demo_dropdown">
                <option value="queens">Bring Back My Girls</option>
                <option value="seasons">Sunrise, sunset, so swiftly fly the years.</option>
                <option value="lipsyncs">The time has come!</option>
            </select>
     )
   }
}
