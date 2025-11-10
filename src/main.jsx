import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navbar from './component/Navbar.jsx';
import './index.css';
import { Router } from 'react-router-dom';
import Footer from './component/Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer/>

  </React.StrictMode>
);
