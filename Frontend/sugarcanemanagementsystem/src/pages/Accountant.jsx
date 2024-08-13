import React from 'react';
import { useSelector } from 'react-redux';
import admin from '../pages/factoryImage/sugarfactory3.jpg';
const AccountantPage = () => {
  const { userInfo } = useSelector((state) => state.login);
  
  return (
  <div>
    <h4 style={{textAlign:'center'}}>Welcome, {userInfo.name}</h4>
    <div className="admin-image-container">
        <img 
          src={admin}
          alt="Admin"
          className="admin-image"
        />
      </div>
  </div>
)};

export default AccountantPage;
