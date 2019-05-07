import React from 'react';

class Blog extends React.Component {

  render() {

    const renderPosts = this.props.blogPosts.map((post, index) => (
      <li key={index}>{post.title}: {post.content}</li>
    ));

    return (
      <div>
        <h2>Blog Archive</h2>
        { renderPosts }
      </div>
    )
  }
}

export default Blog;
