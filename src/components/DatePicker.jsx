import React, { Fragment as Dragment } from 'react';

export default class DatePicker extends React.Component {

  render() {
    
    return (

      <fieldset>

        <h2>{this.props.heading}</h2>

        <label htmlFor="episode-date">Year/Month/Day</label>
      
        <input type="date" name="episode-date" id="episode-date" value={this.props.episodeDate} onChange={this.props.handleChange}></input>

      </fieldset>
      
    );
  }
}
