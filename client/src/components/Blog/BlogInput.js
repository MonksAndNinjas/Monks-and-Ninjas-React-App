import React from 'react';

import '../Admin/Admin.css';

class BlogInput extends React.Component {
  state = {
    title: '',
    content: '',
    post_date: ''
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
      post_date: this.props.formattedDate(new Date())
    })
  }
// makes post request to Rails api
  handleSubmit = event => {
    event.preventDefault();

    fetch('api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(data => this.props.onSubmit(data))
  }

  render() {
    return (
      <div id="blogInput">
        <h2>New Post</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Content
            <input type="textarea" name="content" value={this.state.content} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    )
  }
}

export default BlogInput;
