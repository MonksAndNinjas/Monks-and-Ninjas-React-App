import React from 'react';
import Calendar from 'react-calendar';
import Availability from './Availability'

class Reservation extends React.Component {
  state = {
    date: new Date(),
  }

  formattedDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var day = date.getDay();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var weekday = weekNames[date.getDay()];

    var dateString = weekday + " " + month + " " + day + ", " + year;

    return dateString
  }

  handleChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.state.date} />
        <br/>
        <Availability date={this.formattedDate(this.state.date)} availability={this.props.availability} addReservation={this.props.addReservation} />
      </div>
    )
  }
}

export default Reservation;
