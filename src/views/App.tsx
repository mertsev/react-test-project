import React from 'react';
import './App.css';

import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <div>
            <ul>
            <li><Link to="/">Main page</Link></li>
            <li><Link to="/material">Material test app</Link></li>
            <li><Link to="/spark">spark</Link></li>
            </ul>
            </div>
        </span>
      </header>
    </div>
  );
}

export default App;
