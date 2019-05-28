import React from 'react';
import Blog from '../components/Blog/Blog';
// connects to store
import { connect } from 'react-redux';
// main handler for Blog page
class BlogContainer extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Blog</h1>

        <Blog blogPosts={this.props.postsHash.posts} enableDelete={true} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    postsHash: state.blogPosts
  })
}

export default connect(mapStateToProps)(BlogContainer);
