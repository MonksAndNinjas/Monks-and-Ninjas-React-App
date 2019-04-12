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
        <Availability date={this.state.date.toString()} availability={this.props.availability} />                     />
      </div>
    )
  }
}

export default Reservation;
