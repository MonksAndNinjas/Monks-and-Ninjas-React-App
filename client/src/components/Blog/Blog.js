import React from 'react';
// styling
import './Blog.css';
// displays blog posts in Admin and Blog page
class Blog extends React.Component {

  render() {

    const renderPosts = this.props.blogPosts.map((post, index) => (
      <ul id={`blog-${index}`} key={index}>
        <p>Title: {post.title}</p>
        <li>Content: {post.content}</li>
        <li>Posted On: {post.post_date}
          {this.props.enableDelete ? null : <button onClick={() => this.props.delete(post)}>DELETE</button>}
        </li>
      </ul>
    ));

    return (
      <div id="blogWrapper">
        <h2>Blog Archive</h2>

        { renderPosts }
      </div>
    );
  }
}

export default Blog;
