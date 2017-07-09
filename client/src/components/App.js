import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    )
  }
}

export default connect(
    state => ({
    })
  , )(App);
