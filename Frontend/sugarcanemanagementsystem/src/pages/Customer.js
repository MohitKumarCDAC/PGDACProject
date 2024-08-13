import React, { useState } from 'react';
import axios from 'axios';

import './pageCSS/cfepage.css';//cfestands for Customer,Farmer,Employee(all thre use same css)
import SellsDetails from './SalesDetailsTable';
import { useSelector } from 'react-redux';

const CustomerPage = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [salesData, setSalesData] = useState([]);
  const [error, setError] = useState('');

  const{userInfo}=useSelector(state=>state.login)
console.log(userInfo);

  const handleAadharChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/customer/sells/aadhar/${aadharNumber}`);
      setSalesData(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch sales data. Please check the Aadhar number and try again.');
      setSalesData([]);
    }
  };

  return (
    <div className="cus-page">
      <h5>Welcome {userInfo.name}</h5>
      <h2>Customer Dashboard</h2>
      <div className="aadhar-input-container">
        <label htmlFor="aadharNumber">Enter Aadhar Number:</label>
        <input
          type="text"
          id="aadharNumber"
          value={aadharNumber}
          onChange={handleAadharChange}
          placeholder="Enter your Aadhar number"
        />
        <button onClick={handleSearch}>Search Sales</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {salesData.length > 0 && <SellsDetails salesData={salesData} />}
    </div>
  );
};

export default CustomerPage;
