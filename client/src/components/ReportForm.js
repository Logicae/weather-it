import React, { Component } from 'react'; 
import '../App.css';

export default class ReportForm extends Component {

    constructor(props) {
        super(props)

         this.state = {
            city: '',
            state: '',
            temperature: '',
            conditions: '',
        }
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.createReport(this.state)
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

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <h2 className = "Form-Header">
                    Report Local Weather
                </h2>

                <p>
                    <label>City: </label>
                    <input 
                        type="text"
                        onChange={event => this.handleOnCityChange(event)}
                        value={this.state.city}
                        placeholder="enter city"
                    />
                </p>

                <p>
                    <label>State: </label>
                    <input 
                        type="text"
                        onChange={event => this.handleOnStateChange(event)}
                        value={this.state.state}
                        placeholder="enter state"
                    />
                </p>

                <p>
                    <label>Temperature: </label>
                    <input 
                        type="text"
                        onChange={event => this.handleOnTemperatureChange(event)}
                        value={this.state.temperature}
                        placeholder="enter temperature"
                    />
                </p>

                <p>
                    <label>Conditions: </label>
                    <input 
                        type="text"
                        onChange={event => this.handleOnConditionsChange(event)}
                        value={this.state.conditions}
                        placeholder="enter current conditions"
                    />
                </p>

                <p>
                    <input type="submit" value="Report Weather"/>
                </p>
            </form>
        )
    }
}