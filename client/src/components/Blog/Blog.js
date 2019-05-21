import React from 'react';

class Blog extends React.Component {

  render() {

    const renderPosts = this.props.blogPosts.map((post, index) => (
      <ul id={`blog-${index}`} key={index}><p>Title: {post.title}</p><p>Content: {post.content}</p><p>Posted On: {post.post_date}{this.props.enableDelete ? null : <button onClick={() => this.props.delete(post)}>DELETE</button>}</p></ul>
    ));

    return (
      <div id="blogWrapper">
        <h2>Blog Archive</h2>
        { renderPosts }
      </div>
    )
  }
}

export default Blog;
