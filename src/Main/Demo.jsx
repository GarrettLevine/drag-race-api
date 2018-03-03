import React from 'react';

import './Demo.scss';
import {Tag} from '../components';
import DemoDropdown from './DemoDropdown';
import DemoDescription from './DemoDescription';
import DemoData from './DemoData';

export default class Demo extends React.Component {
    constructor(props){
        super(props)

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange() {
        console.log("yes");
    }
    render() {
        return (
            <section className="demo section">
                <Tag color="blue" content="Demo"/>
                <DemoDropdown
                    handleChange={this.handleDropdownChange}
                />
                <DemoDescription/>
                <DemoData/>
            </section>
        )
    }
}
