import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './Marketing.css';
import icon from '../pages/Image/sugar.svg'; // Import your SVG icon

const PurchaseRegister = () => {
  const [formData, setFormData] = useState({
    productName: 'SUGAR',
    productWeight: '',
    productRate: '',
    totalPrice: '',
    paidBalance: '',
    credit: '',
    purchaseDate: '',
    AadharNumber: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Calculate totalPrice and credit whenever productWeight or productRate changes
    const { productWeight, productRate, paidBalance } = formData;
    const weight = parseFloat(productWeight) || 0;
    const rate = parseFloat(productRate) || 0;
    const paid = parseFloat(paidBalance) || 0;

    const totalPrice = weight * rate;
    const credit = totalPrice - paid;

    setFormData(prevData => ({
      ...prevData,
      totalPrice: totalPrice.toFixed(2),
      credit: credit.toFixed(2)
    }));
  }, [formData.productWeight, formData.productRate, formData.paidBalance]);





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/farmers/add_purchase', formData);
      setSuccessMessage('Purchase registration successful!');
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      productName: 'SUGAR',
      productWeight: '',
      productRate: '',
      totalPrice: '',
      paidBalance: '',
      credit: '',
      purchaseDate: '',
      AadharNumber: ''
    });
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="reg-cont">
      <div className="register-header">
        <img src={icon} alt="Register Icon" className="register-icon" />
        <h2>Purchase Details</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <select
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          >
            <option value="SUGAR">SUGAR</option>
            <option value="JAGGERY">JAGGERY</option>
            <option value="MOLASSIS">MOLASSIS</option>
            <option value="SUGARCANE">SUGARCANE</option>
          </select>
        </div>
        <div>
          <label>Product Weight:</label>
          <input
            type="number"
            name="productWeight"
            value={formData.productWeight}
            placeholder="Enter Product Weight"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Rate:</label>
          <input
            type="number"
            name="productRate"
            value={formData.productRate}
            placeholder="Enter Product Rate"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Price:</label>
          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            placeholder="Enter Total Price"
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>Paid Balance:</label>
          <input
            type="number"
            name="paidBalance"
            value={formData.paidBalance}
            placeholder="Enter Paid Balance"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Credit:</label>
          <input
            type="number"
            name="credit"
            value={formData.credit}
            placeholder="Enter Credit Amount"
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>Purchase Date:</label>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Farmer Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            placeholder="Enter Farmer Aadhar Number"
            onChange={handleChange}
            required
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

export default PurchaseRegister;
