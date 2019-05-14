import React from 'react';
import Reservation from '../components/Training/Reservation.js';
import Services from '../components/Training/Services.js';
import Availability from '../components/Training/Availability.js';
import Client from '../components/Training/Client.js';
import { connect } from 'react-redux';
import { addReservation } from '../actions/reservations';

import 'isomorphic-fetch';

class TrainingContainer extends React.Component {

  state = {
    name: '',
    phoneNumber: '',
    email: '',
    availableTimes: [],
    services: [],
    reservation: '',
    isHidden: true,
    date: new Date(),
  };

  didItSave = (data) => {
    if (data[0] !==  "not available") {
      this.addReservation(data)
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

  dateChange = date => {
    this.setState({ date })
  }

  handleClientChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClientSubmit = event => {
    this.setState({
      isHidden: !this.state.isHidden
    })

    const clientHash = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      reservation: this.state.reservation
    }
    console.log(clientHash)

    fetch('api/client_infos', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientHash)
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  handleReservation = resHash => {
      this.setState({
        reservation: resHash,
        isHidden: !this.state.isHidden
      })
  }

  addReservation = (resHash) => {
    this.props.addReservation(resHash);
   };

   filterTime = (date) => {
     var renderList = this.state.availableTimes;
     var busyList = this.props.reservations;

     const filterBusyList = busyList.filter((hash) => {
       return hash.date === date
     });

     const updatedList = renderList.filter((hash, index) => {
       const response = filterBusyList.filter((item) => {
         return item.time === hash.time
       })

       return response.length === 0
     })

     return updatedList
   }

  render() {
    return (
      <div>
        <h1>Training</h1>

        <Services services={this.state.services} />
        <Reservation date={this.state.date} dateChange={this.dateChange} />
        { this.state.isHidden ? <Availability date={this.formattedDate(this.state.date)} filter={this.filterTime} addReservation={this.addReservation} handleReservation={this.handleReservation} /> : null }
        { this.state.isHidden ? null : <Client handleClientChange={this.handleClientChange} handleClientSubmit={this.handleClientSubmit} name={this.state.name} phoneNumber={this.state.phoneNumber} email={this.state.email} /> }
      </div>
    )
  }

  componentDidMount() {
    fetch('api/availabilities', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => this.setState({
        availableTimes: data
      }));

    fetch('api/services', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => this.setState({
        services: data
      }));

    fetch('api/reservations', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => data.forEach(reservation => this.addReservation(reservation)
    ));

    fetch('api/client_infos', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => console.log(data));
  }
}

const mapStateToProps = state => {
  return({
    reservations: state.reservations.reservations
  })
}

export default connect(mapStateToProps, { addReservation })(TrainingContainer);
