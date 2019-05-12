import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";

//import authReducer from "./store/reducers/auth"


ReactDOM.render(<App />, document.getElementById('root'));

