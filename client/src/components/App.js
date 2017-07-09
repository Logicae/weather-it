import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/reportActions'
import Nav from './Nav'

class App extends Component {
componentWillMount() {
    this.props.actions.loadReports();
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    reports: state.reports
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps)(App);
