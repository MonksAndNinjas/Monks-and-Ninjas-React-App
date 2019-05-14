import React from 'react';

class Availability extends React.Component {

  handleClick = event => {
    event.preventDefault();

    const resHash = {
      time: event.target.value,
      date: this.props.date
    }

    this.props.handleReservation(resHash);
  }

  render() {

    const renderTimes = this.props.filter(this.props.date).map((hash, index) => (
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
