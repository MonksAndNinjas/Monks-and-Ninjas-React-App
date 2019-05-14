import React from 'react';
import Calendar from 'react-calendar';

class Reservation extends React.Component {

  handleChange = date => {
    this.props.dateChange(date)
  }

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.props.date} />
      </div>
    )
  }
}

export default Reservation;
