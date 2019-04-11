import React from 'react';
import Calendar from 'react-calendar';
import Availability from './Availability'

class Reservation extends React.Component {
  state = {
    times: ['9:00AM', '11:00AM', '1:00PM', '3:00PM'],
    date: new Date(),
  }

  handleChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.state.date} />
        <Availability date={this.state.date.toString()} times={this.state.times} />
      </div>
    )
  }
}

export default Reservation;
