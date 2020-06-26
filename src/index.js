import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux' //asyc request and thunk too, provider wraps so access to
import thunk from 'react-thunk'
import { Provider } from 'react-redux'

import App from './App';

//set up our store


ReactDOM.render(<App />,document.getElementById('root'));
