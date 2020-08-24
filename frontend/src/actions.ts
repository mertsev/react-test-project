import { BaseAction, actionIds } from './common';

export const numberRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
});

export const numberRequestCompletedAction = (
  numberGenerated: number
): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});

export const btcDataRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_BTC_DATA_REQUEST_START,
  payload: null,
});

export const btcDataCompletedAction = (
  btcNumber: number
): BaseAction => ({
  type: actionIds.GET_BTC_DATA_REQUEST_COMPLETED,
  payload: btcNumber
});