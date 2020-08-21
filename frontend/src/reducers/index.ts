import { combineReducers } from 'redux';
import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';

import {
  btcNumberCollectionReducer,
  btcNumberCollectionState,
} from './btc-data-collection.reducer';

export interface State {
  btcPriceCollection: btcNumberCollectionState;
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers({
  numberCollection: numberCollectionReducer,
  btcPriceCollection: btcNumberCollectionReducer
});
