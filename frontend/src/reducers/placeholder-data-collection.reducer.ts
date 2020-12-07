import { actionIds, BaseAction } from '../common';

export type placeholderDataCollectionState = [];

export const placeholderDataCollectionReducer = (
  state: placeholderDataCollectionState = [],
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_PLACEHOLDER_DATA_REQUEST_COMPLETED:
      return [...state, action.payload];
  }
  return state;
};
