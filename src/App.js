import React from "react";

import './App.css';
//import * as ReactBootStrap from "react-bootstrap";

import Form from "./Components/Form";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import LoginPatient from "./Components/LoginPatient";
import SignupForm from "./Components/SignupForm";
import SignupPatient from "./Components/SignupPatient";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () =>{
  return <div className="app">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign</Link>
            </li>
            <li>
              <Link to="/Loign">Login</Link>
            </li>
            <li>
              <Link to="/AdminLogin">AdminLogin</Link>
            </li>
            <li>
              <Link to="/LoginPatient">LoginPatient</Link>
            </li>
            <li>
              <Link to="/SignupForm">SignupForm</Link>
            </li>
            <li>
              <Link to="/SignupPatient">SignupPatient</Link>
            </li>
            
          </ul>
        </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/Loign" element={<Login/>}/>
          <Route exact path="/AdminLogin" element={<AdminLogin/>}/>
          <Route exact path="/LoginPatient" element={<LoginPatient/>}/>
          <Route exact path="/SignupForm" element={<SignupForm/>}/>
          <Route exact path="/SignupPatient" element={<SignupPatient/>}/>
        </Routes>
      </Router>
  
  
  </div>;

};
export default  App;