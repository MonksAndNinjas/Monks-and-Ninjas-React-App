import React from 'react';

class AdminPage extends React.Component {

  handleClick = event => {
    event.preventDefault();

    this.props.logout()
  }

  render() {
    return (
      <div>
        Admin page
        <button onClick={event => this.handleClick(event)} >Log Out</button>
      </div>
    )
  }
}

export default AdminPage
