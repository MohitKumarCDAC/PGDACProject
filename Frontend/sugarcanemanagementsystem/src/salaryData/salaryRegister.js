import React, { useState } from 'react';
import axios from 'axios';
import '../MarketingData/Marketing.css';
import icon from '../pages/Image/salary.svg' // Import your SVG icon

const SalaryRegister = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    paymentDate: '',
    salary: '',
    employeeAadharNo: ''
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
      const response = await axios.post('http://localhost:8080/api/employee/add-salary', formData);
      setSuccessMessage('Salary registration successful!');
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      accountNumber: '',
      ifscCode: '',
      paymentDate: '',
      salary: '',
      employeeAadharNo: ''
    });
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="reg-salary">
      <div className="register-header">
        <img src={icon} alt="Register Icon" className="register-icon" />
        <h2>Salary Details</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            placeholder="Enter Account Number"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            placeholder="Enter IFSC Code"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Date:</label>
          <input
            type="date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            placeholder="Enter Salary"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Employee Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            placeholder="Enter Employee Aadhar Number"
            onChange={handleChange}
            required
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

export default SalaryRegister;
