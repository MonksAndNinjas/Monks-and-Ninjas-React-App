import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <NavLink to="/" exact activeStyle={{ background: 'darkblue' }}>Home</NavLink>
        <NavLink to="/about" exact activeStyle={{ background: 'darkblue' }}>About</NavLink>
        <NavLink to="/training" exact activeStyle={{ background: 'darkblue' }}>Training</NavLink>
        <NavLink to="/blog" exact activeStyle={{ background: 'darkblue' }}>Blog</NavLink>
        <NavLink to="/contact" exact activeStyle={{ background: 'darkblue' }}>Contact</NavLink>
      </div>
    )
  }
}

export default NavBar;
