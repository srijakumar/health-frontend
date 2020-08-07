import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux' //asyc request and thunk too, provider wraps so access to
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import trackerReducer from './reducers/trackerReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(trackerReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
