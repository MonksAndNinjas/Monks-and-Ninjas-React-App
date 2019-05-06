import React from 'react';

class BlogInput extends React.Component {
  state = {
    title: '',
    content: '',
    date: new Date(),
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value,
    });
  }

  handleContentChange = event => {
    this.setState({
      content: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = this.state.date;
    const day = date.getDay();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const postDate = month + ' ' + day + ', ' + year

    const post = {
      title: this.state.title,
      content: this.state.content,
      postDate: postDate
    }

    this.props.onSubmit(post);
  }

  render() {
    return (
      <div>
        <h2>Post a new blog here</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Title
            <input type="text" value={this.state.value} onChange={this.handleTitleChange} />
          </label>
          <label>
            Content
            <input type="textarea" value={this.state.value} onChange={this.handleContentChange} />
          </label>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    )
  }
}

export default BlogInput;
