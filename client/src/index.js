import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home';
import About from './About';
import Training from './Training';
import BlogContainer from './BlogContainer';
import Contact from './Contact';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () =>
  <div>
    <NavLink to="/" exact activeStyle={{ background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/about" exact activeStyle={{ background: 'darkblue' }}>About</NavLink>
    <NavLink to="/training" exact activeStyle={{ background: 'darkblue' }}>Training</NavLink>
    <NavLink to="/blog" exact activeStyle={{ background: 'darkblue' }}>Blog</NavLink>
    <NavLink to="/contact" exact activeStyle={{ background: 'darkblue' }}>Contact</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/blog" component={BlogContainer} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
