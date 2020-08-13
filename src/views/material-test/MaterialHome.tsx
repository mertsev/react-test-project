import React from 'react';
//import logo from './logo.svg';
import {
  Link
} from "react-router-dom";
import { BtcDataViewerContainer, BtcDataSetterContainer } from '../../components';

function MaterialHome() {
  return (
    <div className="App">
      <header className="App-header">
        <BtcDataViewerContainer/>
        <BtcDataSetterContainer/>
        <p>
          Material app
        </p>
        <li><Link to="/">Main page</Link></li>
      </header>
    </div>
  );
}

export default MaterialHome;
