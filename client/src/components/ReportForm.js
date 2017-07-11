import React, { Component } from 'react'
import '../App.css'
import App from './App'
import Report from './Report'
import ReportApi from '../components/ReportApi'


class ReportForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reports: []
        }
         this.createNewReport = this.createNewReport.bind(this)
  }
  
    handleOnCityChange(event) {
        this.setState({
            city: event.target.value
        })
    }

    handleOnStateChange(event) {
        this.setState({
            state: event.target.value
        })
    }

    handleOnTemperatureChange(event) {
        this.setState({
            temperature: event.target.value
        })
    }

    handleOnConditionsChange(event) {
        this.setState({
            conditions: event.target.value
        })
    }

    createNewReport(newReport) {
        return fetch('/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                    body: JSON.stringify(newReport)
                })
            .then(response => response.json())
            .then(report => this.setState({
                reports: this.state.reports.concat(report)
                }))
    } 

    handleOnSubmit(event) {
        event.preventDefault()
        this.createNewReport(this.state)
        this.refs.reportForm.reset()
    }

    render() {
        return (
            <div>
                <h2 className = "Form-Header">
                    Report Local Weather
                </h2>
                <form  ref='reportForm' className = "Weather-Form" onSubmit={(event) => this.handleOnSubmit(event)}>

                    <p>
                        <label>City: </label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnCityChange(event)}
                            value={this.props.city}
                            placeholder="enter city"
                        />
                    </p>

                    <p>
                        <label>State: </label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnStateChange(event)}
                            value={this.props.state}
                            placeholder="enter state"
                        />
                    </p>

                    <p>
                        <label>Temperature: </label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnTemperatureChange(event)}
                            value={this.props.temperature}
                            placeholder="enter temperature"
                        />
                    </p>

                    <p>
                        <label>Conditions: </label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnConditionsChange(event)}
                            value={this.props.conditions}
                            placeholder="enter current conditions"
                        />
                    </p>

                    <p>
                        <input type="submit" 
                        value="Report Weather"
                        />
                    </p>
                </form>
            </div>
        )
    }
}

export default ReportForm