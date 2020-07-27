import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';


import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();
/*
export default (history:any) => combineReducers({
  router: connectRouter(history)
  });
*/
export interface State {
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers({
  router: connectRouter(history),
  numberCollection: numberCollectionReducer
});


