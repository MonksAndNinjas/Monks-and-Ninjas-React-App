import React from 'react';

function formattedDate () {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = new Date();
  var day = date.getDay();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();

  var dateString = month + " " + day + ", " + year;

  return dateString
}

class BlogInput extends React.Component {
  state = {
    title: '',
    content: '',
    post_date: formattedDate()
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    fetch('api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Post a new blog here</h2>

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
