import React from 'react';
import BlogInput from '../Blog/BlogInput.js';
import Blog from '../Blog/Blog.js';
import Reservation from './Reservation.js';

class AdminPage extends React.Component {

  state = {
    displayBlog: false,
    displayReservations: false
  }

  handleClick = event => {
    event.preventDefault();
    const path = event.target.name

    if (path === 'blog') {
      this.setState({
        displayBlog: true,
        displayReservations: false
      })
    } else if (path === 'reservations') {
      this.setState({
        displayBlog: false,
        displayReservations: true })
    } else {
      this.props.logout()
    }
  }

  render() {
    return (
      <div>
        <h1>Admin page</h1>

        { this.state.displayBlog ? (
          <div>
            <BlogInput onSubmit={this.props.addBlogPost} />
            <Blog blogPosts={this.props.blogPosts} delete={this.props.delete} enableDelete={false}/>
          </div>
          ) : <button name='blog' onClick={event => this.handleClick(event)}>Blog</button>}
        { this.state.displayReservations ? (
          <div>
            <Reservation reservations={this.props.reservations} findClient={this.props.findClient} />
          </div>
        ) : <button name='reservations' onClick={event => this.handleClick(event)}>Reservations</button>}

        <button onClick={event => this.handleClick(event)}>Log Out</button>
      </div>
    )
  }
}

export default AdminPage
