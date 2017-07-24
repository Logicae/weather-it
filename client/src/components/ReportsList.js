import React, { Component } from 'react'; 
import Report from './Report'

class ReportsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            upvote: props.reports.upvote
        }
  }

    handleUpVote(event) {
        let currentCounter = this.props.reports[event]
        let counter = currentCounter.upvote++
        currentCounter++
        this.setState({
            upvote: counter
        })
    }

    render() {
    return(
        <div>
            <h2 className = "Weather-Header">Weather Reports</h2>
                {this.props.reports.map((report, index) => 
                <div key={report.id} className='box'>
                    <h3>City:</h3> <p>{report.city}</p>
                    <h3>State:</h3> <p>{report.state}</p>
                    <h3>Temperature:</h3> <p>{report.temperature}</p>
                    <h3>Conditions:</h3> <p>{report.conditions}</p>
                    <button onClick={(event) => this.handleUpVote(index)}>Upvote</button> 
                    <p>Upvotes: {report.upvote}</p>
                </div>
                )}
        </div>
    )
    }
}

export default ReportsList