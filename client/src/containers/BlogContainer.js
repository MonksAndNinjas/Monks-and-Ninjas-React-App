import React from 'react';
import Blog from '../components/Blog/Blog.js';
import BlogInput from '../components/Blog/BlogInput.js';
import { connect } from 'react-redux';
import { addBlogPost } from '../actions/posts';
import { deleteBlogPost } from '../actions/posts';
import { editBlogPost } from '../actions/posts';

class BlogContainer extends React.Component {

  addBlogPost = (postHash) => {
    postHash.post_date = String(postHash.post_date)

    this.props.addBlogPost(postHash);
  };

  editBlogPost = (postHash) => {
    console.log(postHash);
  }

  deleteBlogPost = (postHash) => {
    this.props.deleteBlogPost(postHash);
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <BlogInput onSubmit={this.addBlogPost} />
        <Blog blogPosts={this.props.blogPosts} edit={this.editBlogPost} delete={this.deleteBlogPost}  />

      </div>
    )
  }

  componentDidMount() {
    fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => data.forEach(post => this.addBlogPost(post)))
  }

}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts
  })
}

export default connect(mapStateToProps, { addBlogPost, editBlogPost, deleteBlogPost })(BlogContainer);
