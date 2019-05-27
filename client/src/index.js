import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
// allows use of store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// combines and uses reducers
import { combineReducers } from 'redux';
import blogReducer from './reducers/blogReducer.js';
import reservationReducer from './reducers/reservationReducer';
import fetchAvailabilities from './reducers/fetchAvailabilities';
import fetchServices from './reducers/fetchServices';
import fetchClients from './reducers/fetchClients';
// styling
import './index.css';
// main handlers for given routes
import Home from './Home';
import About from './About';
import TrainingContainer from './containers/TrainingContainer';
import BlogContainer from './containers/BlogContainer';
import Contact from './Contact';
import AdminContainer from './containers/AdminContainer';
// code used for displaying in header and footer
import SocialMedia from './components/SocialMedia';
import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';
// allows ability to create routes
import { BrowserRouter as Router, Route } from 'react-router-dom';

const rootReducer = combineReducers({
  blogPosts: blogReducer,
  reservations: reservationReducer,
  availabilities: fetchAvailabilities,
  services: fetchServices,
  clients: fetchClients
})

const store = createStore(rootReducer, applyMiddleware(thunk));

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
        <App />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);

serviceWorker.unregister();
