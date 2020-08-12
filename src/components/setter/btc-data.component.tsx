import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onRequestNewNumber: () => void;
}

export const BtcDataComponent: React.FunctionComponent<Props> = props => (
  <Button variant="contained" color="primary" onClick={props.onRequestNewNumber}>btc Request new number</Button>
);
