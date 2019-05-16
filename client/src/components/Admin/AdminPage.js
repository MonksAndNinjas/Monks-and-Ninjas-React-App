import React from 'react';

class AdminPage extends React.Component {

  state = {
    displayBlog: false,
    displayReservations: false
  }

  handleClick = event => {
    event.preventDefault();
    const path = event.target.name


    if (path === 'blog') {
      this.setState({ displayBlog: true })
    } else if (path === 'reservations') {
      this.setState({ displayReservations: true })
    } else {
      this.props.logout()
    }
  }

  render() {
    return (
      <div>
        <h1>Admin page</h1>

        <button name='blog' onClick={event => this.handleClick(event)}>Blog</button>
        <button name='reservations' onClick={event => this.handleClick(event)}>Reservations</button>

        <button onClick={event => this.handleClick(event)}>Log Out</button>
      </div>
    )
  }
}

export default AdminPage
