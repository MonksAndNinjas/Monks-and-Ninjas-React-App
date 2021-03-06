import React from 'react';
// styling
import './Training.css';
// used for displaying client form and gathering of client info
class Client extends React.Component {

  handleClientChange = event => {
    event.persist();

    this.props.handleClientChange(event)
  }

  handleClientSubmit = event => {
    event.preventDefault();

    this.props.handleClientSubmit(event);
  }

  render() {
    return (
      <div id="clientInput">
        <p style={{ color: 'red' }}>* Now your information *</p>

        <form onSubmit={event => this.handleClientSubmit(event)}>
          <label>
            Name
            <input type="text" name="name" value={this.props.name} onChange={this.handleClientChange} />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" value={this.props.phoneNumber} onChange={this.handleClientChange} />
          </label>
          <label>
            Email
            <input type="text" name="email" value={this.props.email} onChange={this.handleClientChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Client;
