import React from 'react';

class BlogInput extends React.Component {
  state = {
    value: '',
    date: new Date(),
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = this.state.date;
    const day = date.getDay();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const postDate = month + ' ' + day + ', ' + year
    console.log(this.state.value + ': ' + postDate);
  }

  render() {
    return (
      <div>
        <h2>Post a new blog here</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Blog Content
            <input type="textarea" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    )
  }
}

export default BlogInput;
