import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onRequestNewPriceData: () => void;
}

export const BtcDataComponent: React.FunctionComponent<Props> = props => (
  <Button variant="contained" color="primary" onClick={props.onRequestNewPriceData}>btc Request new number</Button>
);
