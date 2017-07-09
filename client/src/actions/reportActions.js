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
    });
  };
}

export function loadReportsSuccess(reports) {  
  return {type: 'LOAD_REPORTS_SUCCESS', reports};
}
