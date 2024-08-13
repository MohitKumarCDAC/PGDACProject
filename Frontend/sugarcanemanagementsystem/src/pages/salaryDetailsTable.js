import React from 'react';
import './pageCSS/SalesDetails.css'; // Make sure to create and style this CSS file as needed

const SalaryDetailsTable = ({ employeeData }) => {
  return (
    <div className="sales-container">
      <h2>Salary Details</h2>
      {employeeData.length > 0 ? (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>IFSC Code</th>
              <th>Payment Date</th>
              <th>Salary</th>
              
            </tr>
          </thead>
          <tbody>
            {employeeData.map((salary) => (
              <tr key={salary.id}>
                <td>{salary.accountNumber}</td>
                <td>{salary.ifscCode}</td>
                <td>{new Date(salary.paymentDate).toLocaleDateString()}</td>
                <td>{salary.salary}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No salary data available.</p>
      )}
    </div>
  );
};

export default SalaryDetailsTable;
