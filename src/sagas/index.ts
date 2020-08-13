import { all, fork } from 'redux-saga/effects';
import { watchNewGeneratedNumberRequestStart } from './number-collection.sagas';
import { watchNewPriceRequestStart } from './btc-data-collection.sagas';

export const rootSaga = function* root() {
  yield all([fork(watchNewGeneratedNumberRequestStart)]);
  yield all([fork(watchNewPriceRequestStart)]);
};
