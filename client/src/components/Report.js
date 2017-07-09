import React, { Component } from 'react'; 

const Report = ({ reports }) => (
  <div>
    <h2 className = "Weather-Header">Weather Reports</h2>
        {reports.map(report => {
          return (
          <div key={report.id} className='box'>
            <h3>City:</h3> <p>{report.city}</p>
            <h3>State:</h3> <p>{report.state}</p>
            <h3>Temperature:</h3> <p>{report.temperature}</p>
            <h3>Conditions:</h3> <p>{report.conditions}</p>
          </div>
        )})}
  </div>
)

export default Report