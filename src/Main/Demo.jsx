import React from 'react';
import { fetch } from '../utils';

import './Demo.scss';
import {Tag} from '../components';
import DemoDescription from './DemoDescription';
import DemoData from './DemoData';
import Dropdown from '../components/Dropdown';

const options = [
    {
        name: "Bring Back My Girls",
        id: 1,
        apiCall: "http://www.nokeynoshade.party/api/queens?limit=10",
        whatDoesItDo: "Retrieve an array of queens in RuPaul's Drag Race herstory with information about their seasons."
    },
    {
        name: "Don't Fuck It Up",
        id: 2,
        apiCall: "http://www.nokeynoshade.party/api/lipsyncs?limit=10",
        whatDoesItDo: "Get a list of lipsyncs in the entire herstory of RuPaul's Drag Race.",
    },
    {
        name: "That's the Gag of the Season",
        id: 3,
        apiCall: "http://www.nokeynoshade.party/api/seasons",
        whatDoesItDo: "Get all seasons from RuPaul's Drag Race herstory."
    },
    {
        name: "You're a Winner, Baby",
        id: 4,
        apiCall: "http://www.nokeynoshade.party/api/queens/winners",
        whatDoesItDo: "Retreive an array of all the winners of RuPaul's Drag Race herstory."
    },
    {
        name: "Whatever Happened to Merle Ginsberg?",
        id: 5,
        apiCall: "http://www.nokeynoshade.party/api/judges?limit=10",
        whatDoesItDo: "Get a list of judges in the entire herstory of RuPaul's Drag Race."
    },
    {
        name: "That's a Lot Of Emotion For Safe",
        id: 6,
        apiCall: "http://www.nokeynoshade.party/api/challenges?limit=10",
        whatDoesItDo: "Get a list of challenges in the entire herstory of Drag Race."
    },
]

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.apiCall = this.apiCall.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.state = {
            apiCallToShow: options[0],
            result: []
        }
    }

    apiCall(url) {
        fetch.get(url)
        .then( result => {
            this.setState({
                result: result
            })
        })
        .catch(error => console.log(error))
    }

    handleDropdownChange(option) {
        this.setState({
            apiCallToShow: option
        })
       this.apiCall(option.apiCall)
    }

    componentDidMount(){
        this.apiCall(this.state.apiCallToShow.apiCall)
    }

    render() {
        return (
            <section className="demo section">
                <Tag color="blue" content="Demo"/>
                <Dropdown
                    options={options}
                    text={this.state.apiCallToShow.name}
                    handleDropdownSelect={this.handleDropdownChange}
                    />
                <p className="demo_description">{this.state.apiCallToShow.whatDoesItDo}</p>
                <DemoData
                    data = {this.state.result}
                />
            </section>
        )
    }
}
