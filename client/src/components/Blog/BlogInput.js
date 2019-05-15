import React from 'react';

class BlogInput extends React.Component {
  state = {
    title: '',
    content: '',
    post_date: ''
  }
// used for displaying simplified date of post
  formattedDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var day = date.getDay();
    var number = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var weekday = weekNames[day];

    var dateString = weekday + " " + month + " " + number + ", " + year;

    return dateString
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
      post_date: this.formattedDate(new Date())
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
