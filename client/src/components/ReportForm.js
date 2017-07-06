import React, { Component } from 'react'; 
import '../App.css';

export default class BookForm extends Component {

    constructor() {
        super()

         this.state = {
            city: ""
        }
    }

    handleOnSubmit(event) {
        return fetch('/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    handleOnCityChange(event) {
        alert(event.target.value)
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <h2 className = "App-header">
                    Report Local Weather
                </h2>

                <p>
                    <label>City: </label>
                    <input 
                        type="text"
                        onChange={event => 
                            this.handleOnCityChange(event)}
                        value={this.state.city}
                    />
                </p>

                <p>
                    <input type="submit" value="Report Weather"/>
                </p>
            </form>
        )
    }
}