import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './monks_and_ninjas_logo.svg';

import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <div className="dropdown">
      <img src={logo} className="dropbtn" style={{ width: '5%', height: '5%' }} alt={logo} />
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
