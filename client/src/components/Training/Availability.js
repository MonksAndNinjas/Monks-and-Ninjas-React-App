import React from 'react';

class Availability extends React.Component {

  handleClick = event => {
    event.preventDefault();

    const resHash = {
      time: event.target.value,
      date: this.props.date
    }

    fetch('api/reservations', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resHash)
    }).then(response => response)
      .then(data => console.log(data))
//need to probably setup with a promise
    this.props.addReservation(resHash);
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
