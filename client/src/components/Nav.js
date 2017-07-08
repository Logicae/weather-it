import React, { Component } from 'react'; 
import '../App.css';

const Nav = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submit">Submit Local Weather</Link></li>
        <li><Link to="/weather">Weather Stream</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/submit" component={Submit}/>
      <Route exact path="/weather" component={Weather}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
)