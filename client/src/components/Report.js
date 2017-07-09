import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/reportActions'

class Report extends Component {
  componentWillMount() {
    this.props.actions.loadReports();
  }
  
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);

// import ReportsList from './ReportsList'
