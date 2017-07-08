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
        <button className='Nav-Button'><Link to="/">Home</Link></button>
        <button className='Nav-Button'><Link to="/form">Submit Local Weather</Link></button>
        <button className='Nav-Button'><Link to="/weather">Weather Stream</Link></button>
        <button className='Nav-Button'><Link to="/about">Weather Stream</Link></button>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/form" component={ReportForm}/>
      <Route exact path="/weather" component={Weather}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
)

export default Nav