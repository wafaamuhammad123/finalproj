import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const Menu = () =>{
  return  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        </Router>
        ;
};
export default  Menu;



