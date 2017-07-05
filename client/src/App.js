import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReportForm from './components/ReportForm';


class App extends Component {

constructor() {
  super()

  this.state = {
    reports: []
  }
}

  componentDidMount() {
    fetch('/reports')
      .then(response => response.json())
      .then(reports => this.setState({ reports }))
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.reports)
    return (
      <div className="App">
        <ReportForm />
      </div>
    );
  }
}

export default App;
