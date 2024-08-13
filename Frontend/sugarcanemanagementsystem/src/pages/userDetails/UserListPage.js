

// src/pages/userDetails/UserListPage.js
import React, { useState } from 'react';
import { getCustomers, getFarmers, getEmployees, getAccountants } from './apiService';
import './UserListPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);
    const navigate=useNavigate();

    const fetchData = async (fetchFunction, categoryName) => {
        try {
            const result = await fetchFunction();
            setData(result);
            setCategory(categoryName);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleButtonClick = (fetchFunction, categoryName) => {
        fetchData(fetchFunction, categoryName);
    };

    const handleUpdate = async (item) => {
        
        navigate(`/UpdateUserPage/${item.aadharNumber}`); //navigate to the update user page
    };

    const handleDelete = async (item) => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/delete/${item.aadharNumber}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            setData(data.filter(user => user.aadharNumber !== item.aadharNumber));
            alert('User deleted successfully');
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <h2>User Lists</h2>
            <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(getCustomers, 'Customers')}>Customers</button>
                <button className="button" onClick={() => handleButtonClick(getFarmers, 'Farmers')}>Farmers</button>
                <button className="button" onClick={() => handleButtonClick(getEmployees, 'Employees')}>Employees</button>
                <button className="button" onClick={() => handleButtonClick(getAccountants, 'Accountants')}>Accountants</button>
            </div>
            {category && (
                <section>
                    <h2>{category}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Aadhar Number</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.aadharNumber}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contactNumber}</td>
                                    <td>{item.aadharNumber}</td>
                                    <td>{item.address.city || 'N/A'}, {item.address.state || 'N/A'}, {item.address.pincode || 'N/A'}</td>
                                    <td>
                                        <button className="button" onClick={() => handleUpdate(item)}>Update</button>
                                        <button className="button" onClick={() => handleDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </div>
    );
};

export default UserListPage;
