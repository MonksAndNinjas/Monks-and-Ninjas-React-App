import React from 'react';

class BlogInput extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch('api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })

    /*const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = this.state.date;
    const day = date.getDay();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const postDate = month + ' ' + day + ', ' + year*/

    //const post = {
      //title: this.state.title,
      //content: this.state.content
  //  }
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
