import React from 'react';
import Blog from '../components/Blog/Blog.js';
import BlogInput from '../components/Blog/BlogInput.js';
import { connect } from 'react-redux';
import { addBlogPost } from '../actions/posts';

class BlogContainer extends React.Component {

  blogPost = (postHash) => {
    this.props.addBlogPost(postHash);
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <BlogInput onSubmit={this.blogPost} />
        <Blog blogPosts={this.props.blogPosts} />

        <section>Current or selected blog post goes here</section>
      </div>
    )
  }

  componentDidMount() {
    fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => data.forEach(post => this.blogPost(post)))
  }

}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts
  })
}

export default connect(mapStateToProps, { addBlogPost })(BlogContainer);
