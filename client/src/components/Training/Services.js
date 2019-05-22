import React from 'react';

import './training.css';

class Services extends React.Component {

  render() {

    const services = this.props.services.map((hash, index) => (
      <ul id={`services-${index}`} key={index}><li>{hash.title}</li><li>{hash.description}</li><li>{hash.duration}</li><li>{hash.cost}</li><br/></ul>
    ));

    return (
      <div id="services">
        <h2>Services offered</h2>
        {services}
      </div>
    )
  }
}

export default Services;
