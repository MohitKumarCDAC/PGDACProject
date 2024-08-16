
import React, { useState, useEffect } from 'react';
import './FeedbackTable.css';

function FeedbackTable() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //use pagination technique
  const [totalPages, setTotalPages] = useState(0);

  //hooks

  useEffect(() => {
    fetchFeedbacks(currentPage);
  }, [currentPage]);

  const fetchFeedbacks = (page) => {
    fetch(`http://localhost:8080/api/feedback?page=${page}&size=2`)  
      .then(response => response.json())
      .then(data => {
        setFeedbacks(data.content);
        setTotalPages(data.totalPages);
      })
      .catch(error => console.error('Error fetching feedback:', error));
  };
  
// pageChange
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

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

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>Page {currentPage + 1} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FeedbackTable;

