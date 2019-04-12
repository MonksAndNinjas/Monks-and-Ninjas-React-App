import React from 'react';

class Availability extends React.Component {

  handleClick = event => {
    console.log(event.target.value + ': ' + this.props.date);
  }

  render() {

    const renderTimes = this.props.availability.map((hash, index) => (
      <li key={index}>{hash.time} <button value={hash.time} onClick={event => this.handleClick(event)}>Reserve Time</button></li>
    ));

    return (
      <div>
        <span>{this.props.date}</span>

        <ul>{renderTimes}</ul>
      </div>
    )
  }
}

export default Availability;
