import React, { Fragment as Dragment } from 'react';

export default class DatePicker extends React.Component {

  render() {
    
    return (
      <Dragment>

        <fieldset>

          <h2>Episode Date</h2>

          <p>Year/Month/Day</p>
        
          <input type="date" name="episode-date" value={this.props.episodeDate} onChange={this.props.handleChange}></input>

        </fieldset>

      </Dragment>
    );
  }
}
