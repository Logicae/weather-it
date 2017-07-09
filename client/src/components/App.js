import React, { Component } from 'react';
import '../App.css';
import ReportForm from './ReportForm';
import { connect } from 'react-redux';
import Home from './Home'
import Nav from './Nav'

class App extends Component {

constructor() {
  super()


}

  render() {
    const { routeName } = this.props

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
