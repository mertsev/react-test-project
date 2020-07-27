import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';


import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export interface State {
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers({
  router: connectRouter(history),
  numberCollection: numberCollectionReducer
});

export default history;

