import ReportApi from '../components/ReportApi'

const loadReports = () => {  
  return function(dispatch) {
    return ReportApi.getAllReports().then(reports => {
      dispatch(loadReportsSuccess(reports));
    })
  }
}

const createReport = (report) => {
  return function (dispatch) {
    return ReportApi.createReport(report).then(responseReport => {
      dispatch(createReportSuccess(responseReport));
      return responseReport;
    })
  }; 
}

function loadReportsSuccess(reports) {  
  return {type: 'LOAD_REPORTS_SUCCESS', reports};
}

const createReportSuccess = (report) => {
  return {type: 'CREATE_REPORT_SUCCESS', report}
}


export {
  loadReports,
  createReport,
  createReportSuccess,
  loadReportsSuccess
}
