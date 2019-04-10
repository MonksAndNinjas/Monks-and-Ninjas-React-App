import React from 'react';

class BlogInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.value);
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
