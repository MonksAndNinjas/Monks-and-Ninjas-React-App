import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addBlogPost } from '../actions/posts.js';
import { addReservation } from '../actions/reservations';

class App extends Component {

  addBlogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  addReservation = (resHash) => {
    this.props.addReservation(resHash);
  };

  render() {
    return (
      <div>
      </div>
    );
  }

  componentDidMount() {
    fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => data.forEach(post => this.addBlogPost(post)))

    fetch('api/reservations', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => data.forEach(reservation => this.addReservation(reservation)));
  }
}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts.blogPosts
  })
}

export default connect(mapStateToProps, { addBlogPost, addReservation })(App);
