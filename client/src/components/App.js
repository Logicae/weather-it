import React, { Component } from 'react';
import '../App.css';
import ReportForm from './ReportForm';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/routeActions'


class App extends Component {

constructor() {
  super()

  this.createReport = this.createReport.bind(this)
}

createReport(newReport) {
  return fetch('/reports', {
    method: 'POST',
      headers: {
          'Content-Type': 'application/json'
          },
            body: JSON.stringify(newReport)
        })
  .then(response => response.json())
  .catch(err => console.log(err))
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
      .catch(err => console.log(err))
  }

handleRouteChange = routeName => this.props.changeRoute({ routeName: routeName })

  render() {
    const { routeName } = this.props

    return (
      <div className="App">
        <div className = 'nav-bar'> 
        </div> 
        <ReportForm createReport= { this.createReport } />
        


{/*
        {this.state.reports.map((report) => {
          return (
          <div key={report.id} className='box'>
            <h3>City:</h3> <p>{report.city}</p>
            <h3>State:</h3> <p>{report.state}</p>
            <h3>Temperature:</h3> <p>{report.temperature}</p>
            <h3>Conditions:</h3> <p>{report.conditions}</p>
          </div>
        )})}*/}

      </div>

    )

  }
}

export default connect(
    state => ({
      routeName: state.route.routeName
    })
  , { changeRoute })(App);
