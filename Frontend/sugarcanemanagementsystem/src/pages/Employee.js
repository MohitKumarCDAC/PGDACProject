import React, { useState } from 'react';
import axios from 'axios';
import './pageCSS/cfepage.css';//cfestands for Customer,Farmer,Employee(all thre use same css)
import SalaryDetails from './salaryDetailsTable';
import { useSelector } from 'react-redux';

const EmployeePage = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState('');
  const {userInfo}=useSelector(state=>state.login)

  const handleAadharChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/employee/salaries/${aadharNumber}`);
      setEmployeeData(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch sales data. Please check the Aadhar number and try again.');
      setEmployeeData([]);
    }
  };

  return (
    <div className="emp-page">
       <h5>Welcome {userInfo.name}</h5>
      <h2>Employee Dashboard</h2>
      <div className="aadhar-input-container">
        <label htmlFor="aadharNumber">Enter Aadhar Number:</label>
        <input
          type="text"
          id="aadharNumber"
          value={aadharNumber}
          onChange={handleAadharChange}
          placeholder="Enter your Aadhar number"
        />
        <button onClick={handleSearch}>Search Salary</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {employeeData.length > 0 && <SalaryDetails employeeData={employeeData} />}
    </div>
  );
};

export default EmployeePage;

