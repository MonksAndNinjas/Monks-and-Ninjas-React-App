import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home';
import About from './About';
import TrainingContainer from './containers/TrainingContainer';
import BlogContainer from './containers/BlogContainer';
import Contact from './Contact';
import SocialMedia from './components/SocialMedia';
import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () =>
  <header><NavBar /></header>;

const Footer = () =>
  <footer><SocialMedia /></footer>;

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/training" component={TrainingContainer} />
      <Route exact path="/blog" component={BlogContainer} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
