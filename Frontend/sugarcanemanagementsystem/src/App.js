//import logo from './logo.svg';
import './App.css';
import './pages/factoryImage/factory.css'
import React from 'react';
 //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   //import { Route,Routes } from 'react-router-dom';
 import Header from './Components/Header/Header';
import Footer from "./Components/footer/Footer";

// import { Outlet } from 'react-router-dom';
import Router from './Router/Router';


function App() {
  return (
    <div>
      <Header/>
      <main>
      <Router/>
      </main>
      
      <Footer/>
      
    </div>
  );
}

export default App;
