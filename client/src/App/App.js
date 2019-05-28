import React, { Component } from 'react';
// for displaying sketch in training page
import sketch from './sketch/sketch.js';
import P5Wrapper from 'react-p5-wrapper';
import './sketch/sketch.css';
// for connecting to store
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch.js';
import { fetchReservations } from '../actions/fetch.js';
// gathers necessary data from Rails API for admin use and places in store
class App extends Component {

  render() {
    return (
      <>
        <P5Wrapper sketch={sketch} />
      </>
    );
  }

  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchReservations()
  }
}

const mapStateToProps = state => {
  return({
    reservations: state.reservations,
    blogPosts: state.blogPosts
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchReservations })(App);
