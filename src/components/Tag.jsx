import React from 'react';
import classNames from 'classnames';


import './Tag.scss';

export default class Tag extends React.Component {
    render() {
        return(
            <div className={classNames('tag', `tag_${this.props.color}`)}>
                {this.props.content}
            </div>
        )
    }
};
