import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onRequestNewPosts: () => void;
}

export const PlaceholderDataComponent: React.FunctionComponent<Props> = props => (
  <Button variant="contained" color="primary" onClick={props.onRequestNewPosts}>request new posts</Button>
);
