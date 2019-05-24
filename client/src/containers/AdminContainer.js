import React from 'react';
import Login from '../components/Admin/Login.js';
import AdminPage from '../components/Admin/AdminPage.js';
// connects to store
import { connect } from 'react-redux';
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
    clients: [],            // list of all clients stored here
    loading: true           // checking sessions from Rails API
  }
// validates user and displays content for admin user
  loggedIn = (user) => {
    if (user) {
      this.setState({ user: user });

      this.display();
    }
  }

  display = () => {
    this.setState({ isLoggedIn: true })
  }
// logout request to Rails API where sessions hash is deleted
  logout = () => {
    fetch('api/users/' + this.state.user, {
      method: "delete",
      headers: {
        'Content-Type': 'application/json'
      }
    })  // should I add a validation of sorts in case was not logged out

    this.setState({ isLoggedIn: false });
  }

  addBlogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  deleteBlogPost = (postHash) => {
    this.props.deleteBlogPost(postHash);
  };

  deleteReservation = (reservationHash) => {
    console.log(reservationHash)
    this.props.deleteReservation(reservationHash);
  }
// compiles list of all clients
  findClient = (clientId) => {
    const client = this.state.clients.find( client => client.id === clientId)
    const renderClient = 'Name: ' + client.name + ' Phone: ' + client.phone + ' Email: ' + client.email
    return renderClient;
  }

  render() {
    let loading  = this.state.loading

    return (
      <div className="container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="adminWrapper">
            <React.Fragment>
              { this.state.isLoggedIn ? <AdminPage reservations={this.props.reservations} formattedDate={formattedDate} blogPosts={this.props.blogPosts} addBlogPost={this.addBlogPost} logout={this.logout} delete={this.deleteBlogPost} findClient={this.findClient} deleteReservation={this.deleteReservation} /> : <Login display={this.display} /> }
            </React.Fragment>
          </div>
        )}
      </div>
    )
  }
// retrieves clients and sessions hash from Rails API
  componentDidMount() {
    fetch('api/client_infos', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => this.setState({ clients: data} ));

    fetch('api/users', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => this.loggedIn(data))
      .then(data => this.setState({
        loading: false,     // is this the best place to turn loader off?
      }));
  }
}

const mapStateToProps = state => {
  console.log(state, 'mapState')
  return({
    blogPosts: state.blogPosts,
    reservations: state.reservations
  })
}

export default connect(mapStateToProps, { addBlogPost, deleteBlogPost, deleteReservation })(AdminContainer)
