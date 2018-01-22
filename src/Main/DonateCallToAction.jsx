import React from 'react';

import './DonateCallToAction.scss';
import {Tag, Button} from '../components';

export default class DonateCallToAction extends React.Component {
    render() {
        return (
            <section className="donate section">
                <Tag color="blue" content="Support the API"/>
                <p className="donate-text">I don’t have a sugar daddy I’ve never had a sugar daddy if I wanted a sugar daddy yes I probably could go out and get one because I am what sickening. You could never have a sugar daddy because you are not that kind of girl baby everything I have I’ve worked for and gotten myself I have built myself from the ground up you fucking bitch.</p>
                <p className="donate-text">‘No Key No Shade’ costs around $50 a month to run. Any support would be appreciated, henny.</p>
                <Button className="button_full-width" label="Donate" />
            </section>
        )
    }
}