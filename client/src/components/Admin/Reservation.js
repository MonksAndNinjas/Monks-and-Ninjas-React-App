import React from 'react';
// displays all reservations to the admin user
class Reservation extends React.Component {
  render () {

    const renderReservations = this.props.reservations.map((reservation, index) => (
      <ul id={`reservation-${index}`} key={index}><li>Time: {reservation.time}</li><li>Date: {reservation.date}</li><li>{this.props.findClient(reservation.client_info_id)}</li><button onClick={() => this.props.delete(reservation)}>DELETE</button></ul>
    ));

    return (
      <div id="reservationWrapper">
        <h2>Reservations</h2>

        {renderReservations}
      </div>
    )
  }
}

export default Reservation
