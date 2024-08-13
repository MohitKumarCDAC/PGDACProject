import React from 'react';
import { useSelector } from 'react-redux';
//import './AdminPage.css'; // Import CSS for styling
import admin from '../pages/factoryImage/sugarfactory3.jpg';

const AdminPage = () => {
  const { userInfo } = useSelector(state => state.login);

  return (
    <div className="admin-page">
      <h5 style={{textAlign:'center'}}>Welcome {userInfo.name}</h5>
      <div className="admin-image-container">
        <img 
          src={admin}
          alt="Admin"
          className="admin-image"
        />
      </div>
    </div>
  );
};

export default AdminPage;
