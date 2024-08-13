import React, { useState } from 'react';
import axios from 'axios';
import './Marketing.css'; // Ensure this path is correct
import icon from '../pages/Image/tractorBlack.svg' // Import your SVG icon
import {FaTractor} from 'react-icons/fa';

const FarmerRegister = () => {
  const [formData, setFormData] = useState({
    aadharNumber: '',
    farmerName: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/farmers/add', formData);
      setSuccessMessage('Registration successful!');
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      aadharNumber: '',
      farmerName: ''
    });
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="reg-farm">
      <div className="register-header">
        {/* <img src={icon} alt="Register Icon" className="register-icon" /> */}
        <FaTractor className="register-icon" />
        <h2>Add Farmer</h2>
      </div>
      <form onSubmit={handleSubmit}>
      
        <div>
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            placeholder='Enter Aadhar Number'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Farmer Name:</label>
          <input
            type="text"
            name="farmerName"
            value={formData.farmerName}
            placeholder='Enter Farmer Name'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default FarmerRegister;
