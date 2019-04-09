import React from 'react';
import Reservation from '../components/Reservation.js';

class TrainingContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>Training</h1>

        <span>Type of Service: $Price: Duration</span>

        <Reservation />
      </div>
    )
  }
}

export default TrainingContainer;
