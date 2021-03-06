import React from 'react';
// styling
import './Training.css';
// used for displaying services from API
class Services extends React.Component {

  render() {

    const services = this.props.services.map((hash, index) => (
      <ul id={`services-${index}`} key={index}>
        <li>{hash.title}</li>
        <li>{hash.description}</li>
        <li>{hash.duration}</li>
        <li>{hash.cost}</li>
      </ul>
    ));

    return (
      <div id="services">
        <h2>Services offered</h2>
        {services}
      </div>
    );
  }
}

export default Services;
