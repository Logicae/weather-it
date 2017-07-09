import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/reportActions'

class Report extends Component {
  render() {
    const reports = this.props.reports
    return(
    <div>
      <h2 className = "Weather-Header">Weather Reports</h2>
      {console.log({reports})} 
    </div>
    )}
}

function mapStateToProps(state) {  
  return {
    reports: state.reports
  }
}

export default connect(mapStateToProps)(Report);


// import ReportsList from './ReportsList'
