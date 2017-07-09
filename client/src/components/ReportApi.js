class ReportApi {  
  static getAllReports() {
    return fetch('/reports', {
      method: 'GET',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .catch(err => console.log(err))
  }

  static createReport(newReport) {
      return fetch('/reports', {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json'
              },
                body: JSON.stringify(newReport)
            })
      .then(response => response.json())
      .catch(err => console.log(err))
  }
  )
}

export default ReportApi;