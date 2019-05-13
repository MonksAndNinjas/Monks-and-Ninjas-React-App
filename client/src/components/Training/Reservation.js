import React from 'react';
import Calendar from 'react-calendar';
import Availability from './Availability'

class Reservation extends React.Component {
  state = {
    name: '',
    date: new Date(),
  }

  handleChange = date => this.setState({ date })

  handleClientChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.state.date} />
        <br/>
        <Availability date={this.state.date} availability={this.props.availability} addReservation={this.props.addReservation} />

        <form>
          <label>
            Name
            <input type="text" name="name" value={this.state.name} onChange={this.handleClientChange} />
          </label>
          <label>
            Phone Number
            <input type="textarea" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleClientChange} />
          </label>
          <label>
            Email
            <input type="textarea" name="email" value={this.state.email} onChange={this.handleClientChange} />
          </label>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    )
  }
}

export default Reservation;
