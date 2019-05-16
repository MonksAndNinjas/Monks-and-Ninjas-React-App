import React from 'react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.username, event.target.password, event.target.value)
    /*fetch('api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })*/
  }

  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Username
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="textarea" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
