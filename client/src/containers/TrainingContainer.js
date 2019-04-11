import React from 'react';
import Reservation from '../components/Training/Reservation.js';
import Services from '../components/Training/Services.js';

import 'isomorphic-fetch';

class TrainingContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>Training</h1>

        <Services />
        <Reservation />
      </div>
    )
  }
}

export default TrainingContainer;
