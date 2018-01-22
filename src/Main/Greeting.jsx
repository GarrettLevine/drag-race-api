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
                    <p><span className="blue-text">Come on internet, let’s get sickening.</span> With this API access to dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </p>
                </div>
            </section>
        );
    }
};
