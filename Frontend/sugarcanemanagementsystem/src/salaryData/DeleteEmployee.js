// src/pages/employee/DeleteEmployeePage.js
import React, { useState } from 'react';
import './deleteEmployee.css'; // Import the CSS file

const DeleteEmployeePage = () => {
    const [aadharNumber, setAadharNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/delete/${aadharNumber}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }

            setMessage(`Employee with Aadhar number ${aadharNumber} has been deleted.`);
            setAadharNumber('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="delete-container">
            <h1>Delete Employee</h1>
            <form onSubmit={handleDelete}>
            <div className="delete-form">
                <input
                    type="text"
                    placeholder="Enter Aadhar Number"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                />
                <button className="delete-button">Delete</button>
            </div>
            </form>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeleteEmployeePage;
