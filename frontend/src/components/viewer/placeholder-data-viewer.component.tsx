import * as React from 'react';

interface dataCard {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface Props {
  placeholderDataCollection: dataCard[];
}

export const PlaceholderDataViewerComponent: React.FunctionComponent<Props> = props => (
  <>
    { !props.placeholderDataCollection.length &&
      <h5>Данных нет</h5>
    }
    <h5>Data collection:</h5>
    <ul>
      {props.placeholderDataCollection.flat().map((newPlaceholderData, index) => (
        <li key={index}>{newPlaceholderData.title}, {newPlaceholderData.body}</li>
      ))}
    </ul>
  </>
);
