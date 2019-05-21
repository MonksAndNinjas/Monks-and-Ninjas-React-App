import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <NavLink to="/" exact activeStyle={{ background: 'grey' }}>Home</NavLink>
          <NavLink to="/about" exact activeStyle={{ background: 'grey' }}>About</NavLink>
          <NavLink to="/training" exact activeStyle={{ background: 'grey' }}>Training</NavLink>
          <NavLink to="/blog" exact activeStyle={{ background: 'grey' }}>Blog</NavLink>
          <NavLink to="/contact" exact activeStyle={{ background: 'grey' }}>Contact</NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar;
