import React from 'react';
import Reservation from '../components/Training/Reservation.js';
import Services from '../components/Training/Services.js';

import 'isomorphic-fetch';

class TrainingContainer extends React.Component {

  state = {
    availableTimes: [],
    services: []
  }

  render() {
    return (
      <div>
        <h1>Training</h1>

        <Services services={this.state.services} />
        <Reservation availability={this.state.availableTimes} />
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
  }
}

export default TrainingContainer;
