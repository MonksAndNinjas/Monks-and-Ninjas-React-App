import React from 'react';
import Calendar from 'react-calendar';
import Availability from './Availability'

class Reservation extends React.Component {
  state = {
    name: '',
    phoneNumber: '',
    email: '',
    date: new Date(),
    valid: false
  }

  handleChange = date => this.setState({ date })

  handleClientChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.valid, event)

    this.setState({
      valid: !this.state.valid
    });

    console.log(this.state.valid)
    /*fetch('api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })*/

    //this.props.onSubmit(this.state);
    this.setState({
      valid: !this.state.valid
    });

    console.log(this.state.valid)
  }

  render() {
    return (
      <div>
        <Calendar onChange={this.handleChange} value={this.state.date} />
        <br/>
        <Availability date={this.state.date} valid={this.state.valid} availability={this.props.availability} addReservation={this.props.addReservation} />

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name
            <input type="text" name="name" value={this.state.name} onChange={this.handleClientChange} />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleClientChange} />
          </label>
          <label>
            Email
            <input type="text" name="email" value={this.state.email} onChange={this.handleClientChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Reservation;
