import React from 'react';
//import logo from './logo.svg';
//import '../../App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function MaterialHome() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Home page for testing app
        </p>
          <div>
            <ul>
              <li>
                <Link to="/">Main page</Link>
              </li>
              <li>
                <Link to="/material">Material test app</Link>
              </li>
            </ul>
            </div>

         
      </header>
    </div>
    </Router>
  );
}

export default MaterialHome;
