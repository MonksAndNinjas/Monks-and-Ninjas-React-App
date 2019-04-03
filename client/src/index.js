import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () =>
  <div>
    <NavLink to="/" exact activeStyle={{ background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/about" exact activeStyle={{ background: 'darkblue' }}>About</NavLink>
    <NavLink to="/training" exact activeStyle={{ background: 'darkblue' }}>Training</NavLink>
    <Navlink to="/blog" exact activeStyle={{ background: 'darkblue' }}>Blog</NavLink>
    <NavLink to="/contact" exact activeStyle={{ background: 'darkblue' }}>Contact</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
