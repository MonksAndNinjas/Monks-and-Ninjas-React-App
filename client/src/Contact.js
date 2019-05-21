import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Contact</h1>

        <p>Phone: 720.220.1556</p>
        <p>Email: <a href="mailto:joseph@monksandninjas.com?subject=Monks and Ninjas Inquiry">Joseph@MonksAndNinjas.com</a></p>
        <p>Boulder, CO</p>
      </div>
    )
  }
}

export default Contact;
