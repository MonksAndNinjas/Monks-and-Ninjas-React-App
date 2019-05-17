import React from 'react';

class Reservation extends React.Component {
  render () {

    const renderReservations = this.props.reservations.map((reservation, index) => (
      <ul key={index}><li>Time: {reservation.time}</li><li>Date: {reservation.date}</li><li>{this.props.findClient(reservation.client_info_id)}</li></ul>
    ));

    return (
      <div>
        <h2>Reservations</h2>

        {renderReservations}
      </div>
    )
  }
}

export default Reservation
