import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { combineReducers } from 'redux';
import blogReducer from './reducers/blogReducer.js';
import reservationReducer from './reducers/reservationReducer';

import './index.css';

import Home from './Home';
import About from './About';
import TrainingContainer from './containers/TrainingContainer';
import BlogContainer from './containers/BlogContainer';
import Contact from './Contact';
import AdminContainer from './containers/AdminContainer';

import SocialMedia from './components/SocialMedia';
import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const rootReducer = combineReducers({
  blogPosts: blogReducer,
  reservations: reservationReducer
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Header = () =>
  <header><NavBar /></header>;

const Footer = () =>
  <footer><SocialMedia /></footer>;

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/training" component={TrainingContainer} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={AdminContainer} />
        <Footer />
      </React.Fragment>
    </Router>
    <App />
  </Provider>),
  document.getElementById('root')
);

serviceWorker.unregister();
