import React from 'react';
import Blog from '../components/Blog/Blog.js';
import BlogInput from '../components/Blog/BlogInput.js';
import { connect } from 'react-redux';

class BlogContainer extends React.Component {

  state = {
    blogPosts: []
  }

  blogPost = ({ content, postDate }) => {
    const post = `${content}: ${postDate}`;

    //this.setState({ blogPosts: [...this.state.blogPosts, post] })
    this.props.
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <BlogInput onSubmit={this.blogPost} />
        <Blog blogPosts={this.state.blogPosts}/>

        <section>Current or selected blog post goes here</section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts
  })
}

export default connect(mapStateToProps)(BlogContainer);
