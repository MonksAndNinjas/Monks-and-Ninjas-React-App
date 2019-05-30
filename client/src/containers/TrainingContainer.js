import React from 'react';
import Services from '../components/Training/Services';
import Availability from '../components/Training/Availability';
import Client from '../components/Training/Client';
import Calendar from 'react-calendar';
// connects to store
import { connect } from 'react-redux';
import { addReservation } from '../actions/reservations';
import { fetchAvailabilities } from '../actions/fetch';
import { fetchServices } from '../actions/fetch';
// allows use of function
import { formattedDate } from '../helpers/helpers';
// styling
import '../components/Training/Training.css';
// for making posts of data to API
import 'isomorphic-fetch';
// main container for Training page
class TrainingContainer extends React.Component {

  state = {
    client: {               // clientHash used for making resevrations
      name: '',
      phoneNumber: '',
      email: '',
      reservation: {
        time: '',
        date: ''
      }
    },
    isHidden: true,         // used for switching between client and reservation input
    date: new Date(),
  };
  // handlers
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
  // gathers reservation data from user input to be used with client info; from availability list
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
  // make a post request to the rails backend where it data will be saved; from client form
  handleClientSubmit = event => {
    this.setState({ isHidden: !this.state.isHidden })

    this.props.addReservation(this.state.client)
  }
  // checks store to remove date and times that are taken
  filterTime = (date) => {
   var unfilteredList = this.props.availabilitiesHash.availabilities;
   var busyList = this.props.reservationsHash.reservations;
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
    return (
      <div className="container" >

        {this.props.servicesHash.loading ? (
            <h1>Loading...</h1>
        ) : (
          <div id="trainingWrapper">
            <h1>Training</h1>

            <Services services={this.props.servicesHash.services} />

            <h2>Make a Reservation</h2>

            <Calendar onChange={this.handleDateChange} value={this.state.date} />
            { this.state.isHidden ? (
                <Availability
                  date={formattedDate(this.state.date)}
                  filter={this.filterTime}
                  addReservation={this.addReservation}
                  handleReservationSubmit={this.handleReservationSubmit}
                />
              ) : (
                null
            )}
            { this.state.isHidden ? (
                null
              ) : (
                <Client
                  handleClientChange={this.handleClientChange}
                  handleClientSubmit={this.handleClientSubmit}
                  name={this.state.name}
                  phoneNumber={this.state.phoneNumber}
                  email={this.state.email}
                />
            )}
          </div>
        )}
      </div>
    );
  }
  // fetch calls to Rails api
  componentDidMount() {
    this.props.fetchAvailabilities();
    this.props.fetchServices();
  }
}

const mapStateToProps = state => {
  return({
    availabilitiesHash: state.availabilities,
    servicesHash: state.services,
    reservationsHash: state.reservations
  })
}

export default connect(mapStateToProps, {
                          addReservation,
                          fetchAvailabilities,
                          fetchServices
                        })(TrainingContainer);
