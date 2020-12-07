export const actionIds = {
  GET_NUMBER_REQUEST_START:
    '[0] Request a new number to the NumberGenerator async service.',
  GET_NUMBER_REQUEST_COMPLETED:
    '[1] NumberGenerator async service returned a new number.',
  GET_BTC_DATA_REQUEST_START:
    '[2] Request a new number to the btc price async service.',
  GET_BTC_DATA_REQUEST_COMPLETED:
    '[3] Btc price async service returned a new number.',
  GET_PLACEHOLDER_DATA_REQUEST_START:
    '[4] Request a new data to the posts async service.',
  GET_PLACEHOLDER_DATA_REQUEST_COMPLETED:
    '[5] posts price async service returned data.',
};

export interface BaseAction {
  type: string;
  payload: any;
}
