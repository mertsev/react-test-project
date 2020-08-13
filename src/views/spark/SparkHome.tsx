import React from 'react';
//import logo from './logo.svg';
import {
  Link
} from "react-router-dom";

function SparkHome() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Spark
        </p>
        <li><Link to="/">Main page</Link></li>
      </header>
    </div>
  );
}

export default SparkHome;
