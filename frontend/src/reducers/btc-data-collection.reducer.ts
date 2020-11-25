import { BtcNumberAction, actionIds } from '../common';

export type btcNumberCollectionState = number[];

export const btcNumberCollectionReducer = (
  state: btcNumberCollectionState = [],
  action: BtcNumberAction
) => {
  switch (action.type) {
    case actionIds.GET_BTC_DATA_REQUEST_COMPLETED:
      return [...state, action.payload];
  }
  return state;
};
