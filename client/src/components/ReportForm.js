import React, { Component } from 'react'; 

export default class BookForm extends Component {
    render() {
        return (
            <form>
                <h2>
                    Report Local Weather
                </h2>

                <p>
                    <label>City: </label>
                    <input type="text"/>
                </p>

                <p>
                    <input type="submit" value="Report Weather"/>
                </p>
            </form>
        )
    }
}