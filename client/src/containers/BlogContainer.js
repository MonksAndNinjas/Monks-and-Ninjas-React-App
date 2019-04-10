import React from 'react';
import Blog from '../components/Blog/Blog.js';
import BlogInput from '../components/Blog/BlogInput.js';

class BlogContainer extends React.Component {

  blogPost = ({ content, postDate }) => {
    console.log(`${content}: ${postDate}`);
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <BlogInput onSubmit={this.blogPost} />
        <Blog />

        <section>Current or selected blog post goes here</section>
      </div>
    )
  }
}

export default BlogContainer;
