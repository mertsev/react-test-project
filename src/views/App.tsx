import React from 'react';
import './App.css';

import { NumberViewerContainer, NumberSetterContainer } from '../components';

import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NumberViewerContainer/>
      <NumberSetterContainer/>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <span>
          <div>
            <ul>
            <li><Link to="/">Main page</Link></li>
            <li><Link to="/material">Material test app</Link></li>
            </ul>
            </div>
        </span>
      </header>
    </div>
  );
}

export default App;
