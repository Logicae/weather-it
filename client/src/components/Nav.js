import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About'
import ReportForm from './ReportForm'
import Report from './Report'
import Home from './Home'
import '../App.css';

const Nav = () => (
  <Router>
    <div>
        <button className='Nav-Button'><Link to="/">Home</Link></button>
        <button className='Nav-Button'><Link to="/form">Submit Weather Report</Link></button>
        <button className='Nav-Button'><Link to="/reports">Weather Stream</Link></button>
        <button className='Nav-Button'><Link to="/about">About WeatherIt</Link></button>

      <br/>
      <br/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/form" component={ReportForm}/>
      <Route exact path="/reports" component={Report}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
)

export default Nav