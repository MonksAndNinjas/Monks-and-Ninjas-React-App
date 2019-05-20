import React from 'react';
import Slider from '../Slider/Slider.js';


class Services extends React.Component {

  render() {

    const services = this.props.services.map((hash, index) => (
      <ul key={index}><li>{hash.title}</li><li>{hash.description}</li><li>{hash.duration}</li><li>{hash.cost}</li><br/></ul>
    ));

    return (
      <div>
        <Slider services={services} />
      </div>
    )
  }
}

export default Services;
