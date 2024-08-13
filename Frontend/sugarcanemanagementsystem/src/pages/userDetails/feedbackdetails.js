import React, { useState, useEffect } from 'react';
import './FeedbackTable.css';

function FeedbackTable() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/feedback') 
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedback:', error));
  }, []);

  return (
    <div className="feedback-table-container">
      <h2>Feedback List</h2>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.message}</td>
              <td>{feedback.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
