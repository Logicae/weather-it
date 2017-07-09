// export const changeRoute = routeName => {
//     return {
//         type: 'CHANGING_ROUTE', 
//         routeName
//     }
// }

import ReportApi from '../components/ReportApi';

const loadReports = () => {  
  return function(dispatch) {
    return ReportApi.getAllReports().then(reports => {
      dispatch(loadReportsSuccess(reports));
    }).catch(error => {
      throw(error);
    })
  }
}

const createReport = report => {
  return function (dispatch) {
    return ReportApi.createReport(report).then(responseReport => {
      dispatch(createReportSuccess(responseReport));
      return responseReport;
    }).catch(error => {
      throw(error);
    });
  }; 
}

const loadReportsSuccess = reports => {  
  return {type: 'LOAD_REPORTS_SUCCESS', reports};
}

const createReportSuccess = report => {
  return {type: 'CREATE_REPORT_SUCCESS', report}
}

export const LOAD_REPORTS_SUCCESS = 'LOAD_REPORTS_SUCCESS'
export const CREATE_REPORT_SUCCESS = 'CREATE_REPORT_SUCCESS'

export {
  loadReports,
  createReport,
  loadReportsSuccess,
  createReportSuccess
}