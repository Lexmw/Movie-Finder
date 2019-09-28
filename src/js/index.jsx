import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import searchReducer from './containers/MovieSearchContainer/MSCReducer';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movieData: searchReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promiseMiddleware)));

/* Update render method invoke */
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);