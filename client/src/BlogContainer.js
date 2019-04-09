import React from 'react';
import Blog from './Blog.js';
import BlogInput from './BlogInput.js';

class BlogContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>

        <BlogInput />
        <Blog />

        <section>Current or selected blog post goes here</section>

        <section>Subscribe and social media option goes here</section>
      </div>
    )
  }
}

export default BlogContainer;
