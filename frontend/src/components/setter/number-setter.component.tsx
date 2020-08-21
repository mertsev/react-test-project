import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onRequestNewNumber: () => void;
}

export const NumberSetterComponent: React.FunctionComponent<Props> = props => (
  <Button variant="contained" color="primary" onClick={props.onRequestNewNumber}>Request new number</Button>
);
