import React from 'react';
//import logo from './logo.svg';
import { BtcDataViewerContainer, BtcDataSetterContainer } from '../../components';
import NavBar from '../../components/navbar';

function MaterialHome() {
  return (
    <div className="App">
      <NavBar/>
        <BtcDataViewerContainer/>
        <BtcDataSetterContainer/>
    </div>
  );
}

export default MaterialHome;
