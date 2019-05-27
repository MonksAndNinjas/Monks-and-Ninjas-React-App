import React from 'react';
import Login from '../components/Admin/Login.js';
import AdminPage from '../components/Admin/AdminPage.js';
// connects to store
import { connect } from 'react-redux';
import { fetchClients } from '../actions/fetch';
import { validateUser } from '../actions/fetch';
import { logOut } from '../actions/fetch';
import { addBlogPost } from '../actions/posts.js';
import { deleteBlogPost } from '../actions/posts.js';
import { deleteReservation } from '../actions/reservations.js';
// allows use of function
import { formattedDate } from '../helpers/helpers.js';
// main handler for Admin page
class AdminContainer extends React.Component {

  state = {
    isLoggedIn: false,      // is admin user logged in?
    user: '',               // if admin user logged in, then user id will be saved here
  }
// validates user and displays content for admin user
  loggedIn = () => {
    let val = this.props.user.user
    //make sure to anticipate type of responses
    if (val === undefined || val === null || val.length === 0 ) {
      return false
    } else {
      return true
    }
  }

  display = () => {
    this.setState({ isLoggedIn: true })
  }
// logout request to Rails API where sessions hash is delete
  logout = () => {
    this.props.logOut(this.props.user.user);
  }

  addBlogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  deleteBlogPost = (postHash) => {
    this.props.deleteBlogPost(postHash);
  };

  deleteReservation = (reservationHash) => {
    this.props.deleteReservation(reservationHash);
  }
// compiles list of all clients
  findClient = (clientId) => {
    const client = this.props.clients.clients.find( client => client.id === clientId)
    const renderClient = 'Name: ' + client.name + ' Phone: ' + client.phone + ' Email: ' + client.email
    return renderClient;
  }

  render() {
    return (
      <div className="container">
        {this.props.clients.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="adminWrapper">
            <React.Fragment>
              { this.loggedIn() ? <AdminPage reservations={this.props.reservations} formattedDate={formattedDate} blogPosts={this.props.blogPosts} addBlogPost={this.addBlogPost} logout={this.logout} delete={this.deleteBlogPost} findClient={this.findClient} deleteReservation={this.deleteReservation} /> : <Login display={this.display} /> }
            </React.Fragment>
          </div>
        )}
      </div>
    )
  }
// retrieves clients and sessions hash from Rails API
  componentDidMount() {
    this.props.fetchClients()
    this.props.validateUser()
  }
}

const mapStateToProps = state => {
  console.log(state);
  return({
    user: state.user,
    clients: state.clients,
    blogPosts: state.blogPosts,
    reservations: state.reservations
  })
}

export default connect(mapStateToProps, { logOut, validateUser, fetchClients, addBlogPost, deleteBlogPost, deleteReservation })(AdminContainer)
