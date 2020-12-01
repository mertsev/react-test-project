import { combineReducers } from 'redux';
import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';

import {
  btcNumberCollectionReducer,
  btcNumberCollectionState,
} from './btc-data-collection.reducer';
import { placeholderDataCollectionReducer, placeholderDataCollectionState } from './placeholder-data-collection.reducer';

export interface State {
  placeholderDataCollection: placeholderDataCollectionState;
  btcPriceCollection: btcNumberCollectionState;
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers({
  placeholderDataCollection: placeholderDataCollectionReducer,
  numberCollection: numberCollectionReducer,
  btcPriceCollection: btcNumberCollectionReducer,
});
