import * as React from 'react';
import { placeholderDataRequestStartAction } from '../../actions';
import { store } from '../../app/store';
import Loader from '../loader';

interface dataCard {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface isLoading {
  isLoading: boolean;
}

interface Props {
  placeholderDataCollection: dataCard[];
}

store.dispatch(placeholderDataRequestStartAction());

export const PlaceholderDataViewerComponent: React.FunctionComponent<Props> = props => (
  <>
    { !props.placeholderDataCollection.length &&
      <>
      <h5>Данных нет</h5>
        <Loader />
      </>
    }
    <h5>Data collection:</h5>
    <ul>
      {props.placeholderDataCollection.flat().map((newPlaceholderData, index) => (
        <li key={index}>{newPlaceholderData.title}, {newPlaceholderData.body}</li>
      ))}
    </ul>
  </>
);
