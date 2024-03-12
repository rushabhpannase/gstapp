import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <NavBar />
      <Sidebar /> */}
      < Login />
  </React.StrictMode>
);


