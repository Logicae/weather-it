import React, { Component } from 'react';
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
    return fetch('/reports', {
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(reports => this.setState({ reports }))
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.reports)

    return (
      <div className="App">
        <ReportForm />

        {this.state.reports.map((report) => {
          return (
          <div key={report.id} className='box'>
            <h3>City:</h3> <p>{report.city}</p>
            <h3>State:</h3> <p>{report.state}</p>
            <h3>Temperature:</h3> <p>{report.temperature}</p>
            <h3>Conditions:</h3> <p>{report.conditions}</p>
          </div>
        )})}

      </div>

    )

  }
}

export default App;
