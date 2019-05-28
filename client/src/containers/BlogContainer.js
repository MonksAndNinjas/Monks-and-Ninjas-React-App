import React from 'react';
import Blog from '../components/Blog/Blog.js';
// connects to store
import { connect } from 'react-redux';
// main handler for Blog page
class BlogContainer extends React.Component {
// think about moving enableDelete answer
  render() {
    return (
      <div className="container">
        <h1>Blog</h1>

        <Blog blogPosts={this.props.blogPosts} delete={this.deleteBlogPost} enableDelete={true} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts.posts
  })
}

export default connect(mapStateToProps)(BlogContainer);
