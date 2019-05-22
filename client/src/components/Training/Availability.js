import React from 'react';

import './training.css';

class Availability extends React.Component {

  handleClick = event => {
    event.preventDefault();

    this.props.handleReservationSubmit(event);
  }

  render() {

    const renderTimes = this.props.filter(this.props.date).map((hash, index) => (
      <li className="availableTime" key={index}><button value={hash.time} onClick={event => this.handleClick(event)}>Reserve Now for {hash.time}</button></li>
    ));

    return (
      <div id="availabilityWrapper">
        <span>{this.props.date}</span>

        <ul id="availability">{renderTimes}</ul>
      </div>
    )
  }
}

export default Availability;
