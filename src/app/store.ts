import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from '../reducers';
import { rootSaga } from '../sagas';

import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);
