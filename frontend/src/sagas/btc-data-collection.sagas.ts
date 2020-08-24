import { call, put, takeEvery } from 'redux-saga/effects';
import { getBtcData } from '../api';
import { btcDataCompletedAction } from '../actions';
import { actionIds } from '../common';

export function* watchNewPriceRequestStart() {
  yield takeEvery(
    actionIds.GET_BTC_DATA_REQUEST_START,
    requestNewPriceNumber
  );
}

function* requestNewPriceNumber() {
  const btcNumber = yield call(getBtcData);
  yield put(btcDataCompletedAction(btcNumber));
}
