import React from 'react';
//import '../App.css';
import './navbar.css'

import {
  Link
} from "react-router-dom";
import { Switch } from '@material-ui/core';

function NavBar() {
  return (
    <div className="navbar">
      <header className="navbar-header">
        <span>
          <nav>
            <ul className="nav__links">
            <li><Link to="/">Main page</Link></li>
            <li><Link to="/material">Material test app</Link></li>
            <li><Link to="/spark">Spark</Link></li>
            </ul>
          </nav>
        </span>
        <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
      </header>
    </div>
  );
}

export default NavBar;
