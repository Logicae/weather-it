import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
