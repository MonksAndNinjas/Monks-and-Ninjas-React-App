import React from 'react';

class Services extends React.Component {

  render() {

    const services = this.props.services.map((hash, index) => (
      <ul id={`services-${index}`} key={index}><li>{hash.title}</li><li>{hash.description}</li><li>{hash.duration}</li><li>{hash.cost}</li><br/></ul>
    ));

    return (
      <div id="services">
        {services}
      </div>
    )
  }
}

export default Services;
