import React from 'react';
import Login from '../components/Admin/Login.js';
import AdminPage from '../components/Admin/AdminPage.js';

class AdminContainer extends React.Component {

  state = {
    isLoggedIn: false
  }

  display = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div>
      { this.state.isLoggedIn ? <AdminPage logout={this.logout} /> : <Login display={this.display} /> }
      </div>
    )
  }

}

export default AdminContainer
