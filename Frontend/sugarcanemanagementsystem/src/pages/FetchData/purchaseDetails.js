import React from 'react';
import './DataList.css'

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
            {purchaseData.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.productName}</td>
                <td>{purchase.productWeight}</td>
                <td>{purchase.productRate}</td>
                <td>{purchase.totalPrice}</td>
                <td>{purchase.paidBalance}</td>
                <td>{purchase.credit}</td>
                <td>{purchase.purchaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No purchase data available.</p>
      )}
    </div>
  );
};

export default PurchaseDetails;
