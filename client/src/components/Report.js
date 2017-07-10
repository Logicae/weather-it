import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions/reportActions'
import ReportsList from './ReportsList'

class Report extends Component {
  render() {
    const reports = this.props.reports
    {console.log(reports)}
    return(
    <div>
      {this.props.reports && <ReportsList reports={reports}/>}
    </div>
    )}
  }

function mapStateToProps(state) {  
  if (state.reportsReducer.length > 0) {
    return {
      reports: state.reportsReducer
    }
  } else {
    return {
      reports: [{city: '', state: '', temperature: '', conditions: ''}]
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {action: bindActionCreators(action, dispatch)}
// }

export default connect(mapStateToProps)(Report)

// import ReportsList from './ReportsList'
