import React from 'react';

class Blog extends React.Component {

  render() {

    const renderPosts = this.props.blogPosts.map((post, index) => (
      <li key={index}>{post}</li>
    ));

    return (
      <div>
        <h2>All Blog Posts go here</h2>

        <ul>{renderPosts}</ul>
      </div>
    )
  }
}

export default Blog;
