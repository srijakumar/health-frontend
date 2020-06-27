import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux' //asyc request and thunk too, provider wraps so access to
import thunk from 'react-thunk'
import { Provider } from 'react-redux'

import App from './App';

//set up our store - store is where you are storing the data globally
//wrap the app in provider so the store is global
//compose allows to pass multiple middleware
//let reducer = '' //reducer tells us what we want to do with our store based on certain actions. reducer will return a new version of the store based on the action object provided

conts composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//let enhancer = compose()

let myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>
    ,document.getElementById('root'));
