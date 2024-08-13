import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './updateUser.css'; // Import CSS for styling
import { useNavigate ,useParams} from 'react-router-dom';

const UpdateUserPage = () => {
    const{aadharNumber}=useParams();//get aadharnumber from url params
    const navigate=useNavigate();//hook for navigate
    const [user, setUser] = useState({
        name: '',
        email: '',
        contactNumber: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        // Fetch existing user details
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/singleUser/${aadharNumber}`);
                setUser(response.data);
            } catch (err) {
                setError('Failed to fetch user details');
            }
        };
        fetchUserDetails();
    }, [aadharNumber]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/user/update/${aadharNumber}`, user);
            setSuccess('User updated successfully');
        } catch (err) {
            setError('Failed to update user');
        }
    };

    return (
        <div className="update-user-page">
            <h1>Update User</h1>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Number:
                    <input
                        type="text"
                        name="contactNumber"
                        value={user.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Update User</button>
                <button onClick={() => navigate(-1)} className="back-button">Back</button>
            </form>
        </div>
    );
};

export default UpdateUserPage;
