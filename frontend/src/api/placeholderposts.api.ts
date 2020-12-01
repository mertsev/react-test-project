import axios from "axios";

export function fetchFromPlaceholderApi() {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/',
    responseType: 'json'
  })
}

interface dataCard {
  userId: number,
  id: number,
  title: string,
  body: string,
}

let postsArr = [];

export const getPlaceholderData = (): Promise<dataCard[]> => {
  const promise = new Promise<dataCard[]>(resolve => {
    fetchFromPlaceholderApi().then((response) => {
        console.log('nice');
        console.log(response.data);
        postsArr = response.data;
        resolve(postsArr);
      }, (error) => {
        console.log(error);
      });
  });

  return promise;
};
