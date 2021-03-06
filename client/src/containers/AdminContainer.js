import React from 'react';
import Login from '../components/Admin/Login';
import AdminPage from '../components/Admin/AdminPage';
// connects to store
import { connect } from 'react-redux';
import { fetchClients } from '../actions/fetch';
import { validateUser } from '../actions/sessions';
import { logIn } from '../actions/sessions';
import { logOut } from '../actions/sessions';
import { addBlogPost } from '../actions/posts';
import { deleteBlogPost } from '../actions/posts';
import { deleteReservation } from '../actions/reservations';
// allows use of function
import { formattedDate } from '../helpers/helpers';
// main handler for Admin page
class AdminContainer extends React.Component {
  // validates user and displays content for admin user
  loggedIn = () => {
    let val = this.props.userHash.user
    //make sure to anticipate type of responses
    if (val === undefined || val === null || val.length === 0 || val.error) {
      return false
    } else {
      return true
    }
  }

  logIn = (userInput) => {
    this.props.logIn(userInput)
  }

  logout = () => {
    this.props.logOut(this.props.userHash.user);
  }
  // blog actions
  addBlogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  deleteBlogPost = (postHash) => {
    this.props.deleteBlogPost(postHash);
  };
  // reservation action
  deleteReservation = (reservationHash) => {
    this.props.deleteReservation(reservationHash);
  }
// compiles list of all clients
  findClient = (clientId) => {
    const client = this.props.clientsHash.clients.find( client => client.id === clientId)
    const renderClient = 'Name: ' + client.name + ' Phone: ' + client.phone + ' Email: ' + client.email

    return renderClient;
  }

  render() {
    return (
      <div className="container">
        {this.props.clientsHash.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="adminWrapper">
            <React.Fragment>
              { this.loggedIn() ? (
                  <AdminPage
                    reservations={this.props.reservationsHash.reservations}
                    formattedDate={formattedDate}
                    blogPosts={this.props.postsHash.posts}
                    addBlogPost={this.addBlogPost}
                    logout={this.logout}
                    delete={this.deleteBlogPost}
                    findClient={this.findClient}
                    deleteReservation={this.deleteReservation}
                   />
                ) : (
                  <Login logIn={this.logIn} />
              )}
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
  return({
    userHash: state.user,
    clientsHash: state.clients,
    postsHash: state.blogPosts,
    reservationsHash: state.reservations
  })
}

export default connect(mapStateToProps, {
                          logIn, logOut,
                          validateUser,
                          fetchClients,
                          addBlogPost,
                          deleteBlogPost,
                          deleteReservation
                        })(AdminContainer)
