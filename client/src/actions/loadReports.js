// export const changeRoute = routeName => {
//     return {
//         type: 'CHANGING_ROUTE', 
//         routeName
//     }
// }

import ReportApi from '../components/ReportApi';

export const loadReports = () => {  
  return function(dispatch) {
    return ReportsApi.getAllReports().then(reports => {
      dispatch(loadReportsSuccess(reports));
    }).catch(error => {
      throw(error);
    });
  };
}
