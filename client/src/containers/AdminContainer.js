import React from 'react';
import Login from '../components/Admin/Login.js';

class AdminContainer extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <div>
      { this.state.isLoggedIn ? null : <Login /> }
      </div>
    )
  }

}

export default AdminContainer
