let randomNumber = 0;

export const getBtcData = (): Promise<number> => {
  const promise = new Promise<number>(resolve => {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * Math.floor(100));
      resolve(randomNumber);
    }, 500);
  });

  return promise;
};
