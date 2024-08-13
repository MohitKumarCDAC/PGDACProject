import React, { useState } from 'react';
import axios from 'axios';
import './pageCSS/register.css'; // Ensure this path is correct
import { MdAppRegistration } from "react-icons/md";
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    role: '',
    aadharNumber: '',
    password: '',
    address: {
      city: '',
      pincode: '',
      state: ''
    }
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user', formData);
      setSuccessMessage('Registration successful!');
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      role: '',
      aadharNumber: '',
      password: '',
      address: {
        city: '',
        pincode: '',
        state: ''
      }
    });
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="register-container">
     <h2> <MdAppRegistration/>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='Enter Name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder='Enter Email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder='Enter Contact Number'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="EMPLOYEE">EMPLOYEE</option>
            <option value="FARMER">FARMER</option>
            <option value="ACCOUNTANT">ACCOUNTANT</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            placeholder='Enter Aadhar Number'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder='Enter Password'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            placeholder='Enter City Name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.address.pincode}
            placeholder='Enter Pincode'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            placeholder='Enter State'
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

export default Registration;
