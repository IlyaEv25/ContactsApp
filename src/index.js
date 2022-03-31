import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './index.css';
import * as Store from "./store.js";
import App from './App'
import Login from './components/Login'


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