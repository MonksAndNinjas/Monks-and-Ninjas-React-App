import React from 'react';

class Availability extends React.Component {

  didItSave = (data) => {
    if (data[0] !==  "not available") {
      this.props.addReservation(data)
    }
  }

  formattedDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var day = date.getDay();
    var number = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var weekday = weekNames[day];

    var dateString = weekday + " " + month + " " + number + ", " + year;

    return dateString
  }

  handleClick = event => {
    event.preventDefault();

    const resHash = {
      time: event.target.value,
      date: this.formattedDate(this.props.date)
    }

    fetch('api/reservations', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resHash)
    }).then(response => response.json())
      .then(data => this.didItSave(data))
  }

  render() {

    const date = this.formattedDate(this.props.date)

    const renderTimes = this.props.availability(date).map((hash, index) => (
      <li key={index}>{hash.time} <button value={hash.time} onClick={event => this.handleClick(event)}>Reserve Time</button></li>
    ));

    return (
      <div>
        <span>{this.formattedDate(this.props.date)}</span>

        <ul>{renderTimes}</ul>
      </div>
    )
  }
}

export default Availability;
