import React, { useState } from 'react';
import axios from 'axios';
import './pageCSS/feedbackForm.css';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        product: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting feedback:', feedback);
        try {
            const response =  await axios.post('http://localhost:8080/api/feedback',feedback);
            console.log('Response:', response.data);
            setSuccess('Feedback submitted successfully');
            setFeedback({
                name: '',
                product: '',
                email: '',
                message: ''
            });
        } catch (err) {
            console.error('Error response:', err.response);
            setError(err.response?.data?.message || 'Failed to submit feedback');
        }
        
    };

    const handleReset = () => {
        setFeedback({
            name: '',
            product: '',
            email: '',
            message: ''
        });
        setError('');
        setSuccess('');
    };

    return (
        <div className="feedback-form">
            <h1>Feedback Form</h1>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={feedback.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Product:
                    <select
                        name="product"
                        value={feedback.product}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Product</option>
                        <option value="SUGAR">SUGAR</option>
                        <option value="JAGGERY">JAGGERY</option>
                        <option value="MOLASSIS">MOLASSIS</option>
                        <option value="SUGARCANE">SUGARCANE</option>
                        {/* Add more options as needed */}
                    </select>
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={feedback.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
