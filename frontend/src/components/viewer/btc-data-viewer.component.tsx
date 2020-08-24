import * as React from 'react';

interface Props {
  btcPriceCollection: number[];
}

export const BtcDataViewerComponent: React.FunctionComponent<Props> = props => (
  <>
    <h5>Generated numbers collection:</h5>
    <ul>
      {props.btcPriceCollection.map(newBtcNumber => (
        <li key={newBtcNumber}>{newBtcNumber}</li>
      ))}
    </ul>
  </>
);
