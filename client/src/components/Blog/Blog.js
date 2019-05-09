import React from 'react';

class Blog extends React.Component {

  render() {

    const renderPosts = this.props.blogPosts.map((post, index) => (
      <ul key={index}>Title: {post.title}<br/>Content: {post.content}<br/>Posted On: {post.post_date}<button onClick={() => this.props.edit(post)}>EDIT</button><button onClick={() => this.props.delete(post)}>DELETE</button></ul>
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
