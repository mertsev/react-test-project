import { call, put, takeEvery } from 'redux-saga/effects';
import { getPlaceholderData } from '../api';
import { placeholderDataCompletedAction } from '../actions';
import { actionIds } from '../common';

export function* watchNewDataRequestStart() {
  yield takeEvery(
    actionIds.GET_PLACEHOLDER_DATA_REQUEST_START,
    requestNewData
  );
}

function* requestNewData() {
  const placeholderData = yield call(getPlaceholderData);
  yield put(placeholderDataCompletedAction(placeholderData));
}
