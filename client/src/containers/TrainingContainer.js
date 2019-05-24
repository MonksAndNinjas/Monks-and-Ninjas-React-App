import React from 'react';
import Services from '../components/Training/Services.js';
import Availability from '../components/Training/Availability.js';
import Client from '../components/Training/Client.js';
import Calendar from 'react-calendar';
// connects to store
import { connect } from 'react-redux';
import { addReservation } from '../actions/reservations';
// allows use of function
import { formattedDate } from '../helpers/helpers';
// styling
import '../components/Training/Training.css';
// for making posts of data to API
import 'isomorphic-fetch';
// main container for Training page
class TrainingContainer extends React.Component {

  state = {
    client: {               // clientHash that used for making reserations
      name: '',
      phoneNumber: '',
      email: '',
      reservation: {
        time: '',
        date: ''
      }
    },
    availableTimes: [],     // hours of operation pulled from rails api
    services: [],           // list of services pulled form rails api
    isHidden: true,         // used for switching between client and reservation input
    loading: true,          // used for switching loading animation on/off
    date: new Date(),
  };

  handleDateChange = date => {
    this.setState({
      isHidden: true,
      date
     })
  }

  handleClientChange = event => {
    this.setState({
      client: {
        ...this.state.client,
        [event.target.name]: event.target.value
      }
    })
  }
// gathers reservation data from user input to be used with client info
  handleReservationSubmit = event => {
      this.setState({
        client: {
          reservation: {
            time: event.target.value,
            date: formattedDate(this.state.date)
          },
        },
        isHidden: !this.state.isHidden
      })
  }
  // make a post request to the rails backend where it data will be saved
  handleClientSubmit = event => {
    this.setState({ isHidden: !this.state.isHidden })

    fetch('api/client_infos', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.client)
    }).then(response => response.json())
      .then(data => this.didItSave(data))
  }
  // double checks for errors
  // add send email notification to administrator that reservation was made
  didItSave = (data) => {
    if (data[0] !==  "not available") {
      this.addReservation(data.reservation)
    }
  }
  // reservation and client is successful and reservation is entered into store
  addReservation = (resHash) => {
    this.props.addReservation(resHash);
  };
  // checks store to remove date and times that are taken
  filterTime = (date) => {
   var unfilteredList = this.state.availableTimes;
   var busyList = this.props.reservations;
   // gathers all the times reserved for a specific date
   const filterByDateBusyList = busyList.filter((hash) => {
     return hash.date === date
   });
   // look for matched times so they can be removed from the list to be rendered
   const renderList = unfilteredList.filter((hash, index) => {
     const isThereMatch = filterByDateBusyList.filter((item) => {
       return item.time === hash.time
     })

     return isThereMatch.length === 0
   })

   return renderList
  }

  render() {
    let loading  = this.state.loading;

    return (
      <div className="container" >

        {loading ? (
            <h1>Loading...</h1>
        ) : (
          <div id="trainingWrapper">
            <h1>Training</h1>

            <Services services={this.state.services} />

            <h2>Make a Reservation</h2>

            <Calendar onChange={this.handleDateChange} value={this.state.date} />
            { this.state.isHidden ? <Availability date={formattedDate(this.state.date)} filter={this.filterTime} addReservation={this.addReservation} handleReservationSubmit={this.handleReservationSubmit} /> : null }
            { this.state.isHidden ? null : <Client handleClientChange={this.handleClientChange} handleClientSubmit={this.handleClientSubmit} name={this.state.name} phoneNumber={this.state.phoneNumber} email={this.state.email} /> }
          </div>
        )}
      </div>
    )
  }
// fetch calls from Rails api
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
        loading: false,     // is this the best place to turn loader off?
        services: data
      }));
  }
}

const mapStateToProps = state => {
  return({
    reservations: state.reservations
  })
}

export default connect(mapStateToProps, { addReservation })(TrainingContainer);
