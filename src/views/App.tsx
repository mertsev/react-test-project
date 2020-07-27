import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NumberViewerContainer, NumberSetterContainer } from '../components';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberSetterContainer />
        <NumberViewerContainer />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <span>
          <div>
            <ul>
              <li>
                <Link to="/"><li>Main page</li></Link>
              </li>
              <li>
                <Link to="/material"><li>Material test app</li></Link>
              </li>
            </ul>
            </div>
        </span>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
    </Router>
  );
}

export default App;
