import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import * as Store from "./store";
import App from './App'
import Login from './Login'

import './scss/styles.scss';


render(
  <Provider store={Store.store}>
    <Router>
        <div>
            <Routes>
                <Route path="/" element = {<Login />}/>
                <Route path="/contacts" element = {<App />}/>
            </Routes>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);