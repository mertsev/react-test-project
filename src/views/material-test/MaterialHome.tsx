import React from 'react';
//import logo from './logo.svg';
import {
  Link
} from "react-router-dom";

function MaterialHome() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Material app
        </p>
        <li><Link to="/">Main page</Link></li>
      </header>
    </div>
  );
}

export default MaterialHome;
