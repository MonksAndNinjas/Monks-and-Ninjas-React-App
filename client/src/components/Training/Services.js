import React from 'react';

class Services extends React.Component {

  render() {

    const services = this.props.services.map((hash, index) => (
      <ul key={this.props.key}><li>{hash.title}</li><li>{hash.description}</li><li>{hash.duration}</li><li>{hash.cost}</li><br/></ul>
    ));

    return (
      <div>
        {services}
      </div>
    )
  }
}

export default Services;
