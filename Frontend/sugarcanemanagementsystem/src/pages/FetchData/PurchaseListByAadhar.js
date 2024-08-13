import React, { useState } from 'react';
import axios from 'axios';
import './Page.css';
import PurchaseDetails from './purchaseDetails';

const PurchaseListPage = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [purchaseData, setPurchaseData] = useState([]);
  const [error, setError] = useState('');
  const [searchBy, setSearchBy] = useState('aadhar'); // To toggle between Aadhar and Date search
  const [date, setDate] = useState(''); // State for date search

  const handleAadharChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = async () => {
    try {
      let response;
      if (searchBy === 'aadhar') {
        response = await axios.get(`http://localhost:8080/api/farmers/purchases/aadhar/${aadharNumber}`);
      } else if (searchBy === 'date') {
        response = await axios.get(`http://localhost:8080/api/farmers/purchases/date/${date}`);
      }
      setPurchaseData(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch purchase data. Please check your input and try again.');
      setPurchaseData([]);
    }
  };

  return (
    <div className="customer-page-container">
      <h2>Purchase Dashboard(FarmerData)</h2>
      <div className="search-toggle">
        <button onClick={() => setSearchBy('aadhar')}>Search by Aadhar Number</button>
        <button onClick={() => setSearchBy('date')}>Search by Date</button>
      </div>
      {searchBy === 'aadhar' ? (
        <div className="aadhar-input-container">
          <label htmlFor="aadharNumber">Enter Aadhar Number:</label>
          <input
            type="text"
            id="aadharNumber"
            value={aadharNumber}
            onChange={handleAadharChange}
            placeholder="Enter your Aadhar number"
          />
        </div>
      ) : (
        <div className="aadhar-input-container">
          <label htmlFor="date">Enter Date (yyyy-mm-dd):</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={handleDateChange}
            placeholder="Enter the date in this Format(yyyy-mm-dd)"
          />
        </div>
      )}
      <button onClick={handleSearch}>Search </button>
      {error && <p className="error-message">{error}</p>}
      {purchaseData.length > 0 && <PurchaseDetails purchaseData={purchaseData} />}
    </div>
  );
};

export default PurchaseListPage;
