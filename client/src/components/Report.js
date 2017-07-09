import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import ReportsList from './ReportsList'

class Report extends Component {
  this.props.actions.getAllReports();

  render() {
    const reports = this.props.reports
    return(
    <div>
      <h2 className = "Weather-Header">Weather Reports</h2>
      <ReportsList  reports={reports}/>
    </div>
    )}
}


function mapStateToProps(state) {  
  if (state.reports.length > 0) {
    return {
      reports: state.reports
    };
  } else {
    return {
      reports: [{city: '', state: '', temperature: '', conditions: ''}]
    }
  }
}

export default connect(mapStateToProps)(Report);