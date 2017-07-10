import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import ReportsList from './ReportsList'

class Report extends Component {
  render() {
    const reports = this.props.reports
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
