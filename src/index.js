import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux' //asyc request and thunk too, provider wraps so access to
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import trackerReducer from './reducers/trackerReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

//set up our store - store is where you are storing the data globally
//wrap the app in provider so the store is global
//compose allows to pass multiple middleware
//let reducer = '' //reducer tells us what we want to do with our store based on certain actions. reducer will return a new version of the store based on the action object provided

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
//let enhancer = compose()

let store = createStore(trackerReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <h1>
        HabitFormer & Tracker!
      </h1>

      <p>
        Welcome to HabitFormer & Tracker! With this app, determine the habit (or multiple) you want to track and document it along with date-timestamp to see your progression. Review your existing trackers or add a new one - let's get started!
      </p>

      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
