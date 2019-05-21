import React from 'react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }
// validates response from Rails API
  validLogIn = data => {
    if (!data.error) {
      this.props.display()
    }
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
// sends user input to Rails API where it is "authenticated"
    fetch('api/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(data => this.validLogIn(data))
  }

  render() {
    return (
      <div id="adminLogin">
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
