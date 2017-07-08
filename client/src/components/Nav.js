import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About'
import ReportForm from './ReportForm'
import Weather from './Weather'
import Home from './Home'
import '../App.css';

const Nav = () => (
  <Router>
    <div>
        <button><Link to="/">Home</Link></button>
        <li><Link to="/submit">Submit Local Weather</Link></li>
        <li><Link to="/weather">Weather Stream</Link></li>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/form" component={ReportForm}/>
      <Route exact path="/weather" component={Weather}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
)

export default Nav