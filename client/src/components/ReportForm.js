import React, { Component } from 'react'
import '../App.css'
import { Field, reduxForm } from 'redux-form'

class ReportForm extends Component {
    render() {
  const { handleSubmit } = this.props
  return (
    <div>
        <h2 className = "Form-Header">
            Report Local Weather
        </h2>
        <form className='Weather-Form' onSubmit={ handleSubmit }>
            <p>
                <label htmlFor="city">City </label>
                <Field name="city" component="input" type="text" />
            </p>
            <p>
                <label htmlFor="state">State </label>
                <Field name="state" component="input" type="text" />
            </p>
            <p>
                <label htmlFor="temperature">Temperature </label>
                <Field name="temperature" component="input" type="text" />
            </p>
            <p>
                <label htmlFor="conditions">Conditions </label>
                <Field name="conditions" component="input" type="text" />
            </p>
            <button type="submit">Submit Weather Report</button>
        </form>
    </div>
  )
}
}

ReportForm = reduxForm({
  // a unique name for the form
  form: 'report'
})(ReportForm)

const mapStateToProps = (state) => {
  {alert.log(state)}
}

export default ReportForm



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