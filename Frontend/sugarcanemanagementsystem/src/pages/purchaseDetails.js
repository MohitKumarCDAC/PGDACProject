import React from 'react';
import './pageCSS/SalesDetails.css';

const PurchaseDetails = ({ purchaseData }) => {
  return (
    <div className="sales-container">
      <h2>Purchase Details</h2>
      {purchaseData.length > 0 ? (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Weight</th>
              <th>Product Rate</th>
              <th>Total Price</th>
              <th>Paid Balance</th>
              <th>Credit</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.productName}</td>
                <td>{sale.productWeight}</td>
                <td>{sale.productRate}</td>
                <td>{sale.totalPrice}</td>
                <td>{sale.paidBalance}</td>
                <td>{sale.credit}</td>
                <td>{sale.purchaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No sales data available.</p>
      )}
    </div>
  );
};

export default PurchaseDetails;
