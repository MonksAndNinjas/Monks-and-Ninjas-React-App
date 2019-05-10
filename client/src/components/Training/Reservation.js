import React from 'react';
import Calendar from 'react-calendar';
import Availability from './Availability'

class Reservation extends React.Component {
  state = {
    date: new Date(),
  }

  handleChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.state.date} />
        <br/>
        <Availability date={this.state.date} availability={this.props.availability} addReservation={this.props.addReservation} />
      </div>
    )
  }
}

export default Reservation;
