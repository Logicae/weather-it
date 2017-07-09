// export const changeRoute = routeName => {
//     return {
//         type: 'CHANGING_ROUTE', 
//         routeName
//     }
// }

import ReportApi from '../components/ReportApi';

export const loadReports = () => {  
  return function(dispatch) {
    return ReportApi.getAllReports().then(reports => {
      dispatch(loadReportsSuccess(reports));
    }).catch(error => {
      throw(error);
    })
  }
}

export function createReport(report) {
  return function (dispatch) {
    return ReportApi.createReport(report).then(responseReport => {
      dispatch(createReportSuccess(responseReport));
      return responseReport;
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadReportsSuccess(reports) {  
  return {type: 'LOAD_REPORTS_SUCCESS', reports};
}

export function createReportSuccess(report) {
  return {type: types.CREATE_REPORT_SUCCESS, report}
}
