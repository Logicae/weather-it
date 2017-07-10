import React, { Component } from 'react'; 
import '../App.css';

export default class ReportForm extends Component {

}


    // render() {
    //     return (
    //         <div>
    //             <h2 className = "Form-Header">
    //                 Report Local Weather
    //             </h2>
    //             <form  className = "Weather-Form" onSubmit={(event) => this.handleOnSubmit(event)}>

    //                 <p>
    //                     <label>City: </label>
    //                     <input 
    //                         type="text"
    //                         onChange={this.props.onChange}
    //                         value={this.props.city}
    //                         placeholder="enter city"
    //                     />
    //                 </p>

    //                 <p>
    //                     <label>State: </label>
    //                     <input 
    //                         type="text"
    //                         onChange={this.props.onChange}
    //                         value={this.props.state}
    //                         placeholder="enter state"
    //                     />
    //                 </p>

    //                 <p>
    //                     <label>Temperature: </label>
    //                     <input 
    //                         type="text"
    //                         onChange={this.props.onChange}
    //                         value={this.props.temperature}
    //                         placeholder="enter temperature"
    //                     />
    //                 </p>

    //                 <p>
    //                     <label>Conditions: </label>
    //                     <input 
    //                         type="text"
    //                         onChange={this.props.onChange}
    //                         value={this.props.conditions}
    //                         placeholder="enter current conditions"
    //                     />
    //                 </p>

    //                 <p>
    //                     <input type="submit" 
    //                     value="Report Weather"
    //                     onSubmit={this.props.onSave}
    //                     />
    //                 </p>
    //             </form>
    //         </div>
    //     )
    // }