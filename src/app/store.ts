import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from '../reducers';
import { rootSaga } from '../sagas';

import {routerMiddleware} from 'connected-react-router';

import history from '../reducers/index'
const sagaMiddleware = createSagaMiddleware();
/*
export const history = createBrowserHistory();
console.log(history); */
export const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);
