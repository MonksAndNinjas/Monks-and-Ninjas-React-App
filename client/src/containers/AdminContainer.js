import React from 'react';
import Login from '../components/Admin/Login.js';
import AdminPage from '../components/Admin/AdminPage.js';

class AdminContainer extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <div>
      { this.state.isLoggedIn ? <AdminPage /> : <Login /> }
      </div>
    )
  }

}

export default AdminContainer
