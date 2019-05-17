import React from 'react';
import Login from '../components/Admin/Login.js';
import AdminPage from '../components/Admin/AdminPage.js';

import { connect } from 'react-redux';
import { addBlogPost } from '../actions/posts.js';
import { deleteBlogPost } from '../actions/posts.js';

class AdminContainer extends React.Component {

  state = {
    isLoggedIn: false,
    clients: []
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

  addBlogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  deleteBlogPost = (postHash) => {
    this.props.deleteBlogPost(postHash);
  };

  render() {
    return (
      <div>
      { this.state.isLoggedIn ? <AdminPage reservations={this.props.reservations} blogPosts={this.props.blogPosts} addBlogPost={this.addBlogPost} logout={this.logout} delete={this.deleteBlogPost}/> : <Login display={this.display} /> }
      </div>
    )
  }

  componentDidMount() {
    fetch('api/client_infos', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => this.setState({ clients: data} ));
  }
}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts.blogPosts,
    reservations: state.reservations.reservations
  })
}

export default connect(mapStateToProps, { addBlogPost, deleteBlogPost })(AdminContainer)
