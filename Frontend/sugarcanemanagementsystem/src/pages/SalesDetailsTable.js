import React from 'react';
import './pageCSS/SalesDetails.css';

const SellsDetails = ({ salesData }) => {
  return (
    <div className="sales-container">
      <h2>Sales Details</h2>
      {salesData.length > 0 ? (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Weight</th>
              <th>Product Rate</th>
              <th>Total Price</th>
              <th>Paid Balance</th>
              <th>Credit</th>
              <th>Selling Date</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.productName}</td>
                <td>{sale.productWeight}</td>
                <td>{sale.productRate}</td>
                <td>{sale.totalPrice}</td>
                <td>{sale.paidBalance}</td>
                <td>{sale.credit}</td>
                <td>{sale.sellingDate}</td>
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

export default SellsDetails;
