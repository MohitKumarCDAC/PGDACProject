import React, { useState } from 'react';
import axios from 'axios';
import '../MarketingData/Marketing.css'; // Ensure this path is correct
import icon from '../pages/Image/worker.svg' // Import your SVG icon

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    aadharNumber: '',
    employeeName: ''
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
      const response = await axios.post('http://localhost:8080/api/employee/add', formData);
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
      employeeName: ''
    });
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="reg-farm">
      <div className="register-header">
        <img src={icon} alt="Register Icon" className="register-icon" />
        <h2>Add Employee</h2>
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
          <label>Employee Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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

export default EmployeeRegister;
