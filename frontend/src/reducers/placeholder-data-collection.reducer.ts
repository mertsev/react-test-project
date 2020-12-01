import { PlaceholderDataAction, actionIds } from '../common';

export type placeholderDataCollectionState = [];

export const placeholderDataCollectionReducer = (
  state: placeholderDataCollectionState = [],
  action: PlaceholderDataAction
) => {
  switch (action.type) {
    case actionIds.GET_PLACEHOLDER_DATA_REQUEST_COMPLETED:
      return [...state, action.payload];
  }
  return state;
};
