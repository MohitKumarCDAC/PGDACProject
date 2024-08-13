import React, { useState } from 'react';
import axios from 'axios';
import './pageCSS/cfepage.css';//cfestands for Customer,Farmer,Employee(all thre use same css)
import PurchaseDetails from './purchaseDetails';
import { useSelector } from 'react-redux';

const FarmerPage = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [purchaseData, setPurchaseData] = useState([]);
  const [error, setError] = useState('');

  const{userInfo}=useSelector(state=>state.login)


  const handleAadharChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/farmers/purchases/aadhar/${aadharNumber}`);
      setPurchaseData(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch sales data. Please check the Aadhar number and try again.');
      setPurchaseData([]);
    }
  };

  return (
    <div className="farm-page">
       <h5>Welcome {userInfo.name}</h5>
      <h2>Farmer Dashboard</h2>
      <div className="aadhar-input-container">
        <label htmlFor="aadharNumber">Enter Aadhar Number:</label>
        <input
          type="text"
          id="aadharNumber"
          value={aadharNumber}
          onChange={handleAadharChange}
          placeholder="Enter your Aadhar number"
        />
        <button onClick={handleSearch}>Search Purchase</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {purchaseData.length > 0 && <PurchaseDetails purchaseData={purchaseData} />}
    </div>
  );
};

export default FarmerPage;

