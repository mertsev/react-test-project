import axios from "axios";

export function fetchFromApi() {
  return axios({
    method: 'get',
    url: 'https://blockchain.info/ticker',
    responseType: 'json'
  })
}

let btcPrice = 0;

export const getBtcData = (): Promise<number> => {
  const promise = new Promise<number>(resolve => {
      fetchFromApi().then((response) => {
        console.log(response.data["USD"]["last"]);
        btcPrice = response.data["USD"]["last"];
        resolve(btcPrice);
      }, (error) => {
        console.log(error);
      });
  });

  return promise;
};
