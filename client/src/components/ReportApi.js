class ReportApi {  
  static getAllReports() {
    return fetch('http://localhost:3000/reports').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default ReportApi;