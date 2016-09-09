import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import firebase from 'firebase';

import * as reducers from 'reducers';
import sagas from 'sagas';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({ ...reducers, routing: routerReducer });

const sagaMiddleware = createSagaMiddleware();

export const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(sagas);

const config = {
  apiKey: 'AIzaSyBg5uDuHiRJboytD_vuIFeuJCZP6y_3Es8',
  authDomain: 'egft-api.firebaseapp.com',
  databaseURL: 'https://egft-api.firebaseio.com',
  storageBucket: 'egft-api.appspot.com',
};

firebase.initializeApp(config);

export default store;
