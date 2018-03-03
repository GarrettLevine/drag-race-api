import React from 'react';

import './Greeting.scss';

import { Tag } from '../components';

export default class extends React.Component{
    render() {
        return(
            <section className="greeting section">
                <div className="greeting-portrait">
                    <img className="greeting-portrait_img" src="/assets/imgs/trixie-graphic@2x.png" />
                </div>
                <div className="greeting-text">
                    <Tag
                        color="blue"
                        content="New API, who dis?"
                    />
                    <p><span className="blue-text">Come on internet, let’s get sickening.</span> This API retrieves information about the queens, seasons, and episodes of RuPaul's Drag Race! </p>
                    <p>There is currently no key required to use this API, but there is a rate limit of a 100 requests per IP every 15 minutes.</p>
                </div>
            </section>
        );
    }
};
