import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import ResetPasswordForm from './Components/ResetPassword';
import DashBoard from "./Components/DashBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <NavBar />
      <Sidebar /> */}
      {/* < Login />
      < ResetPasswordForm /> */}
      < DashBoard />
  </React.StrictMode>
);


