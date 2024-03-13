import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import ResetPasswordForm from './Components/ResetPassword';
import Screen1 from "./Components/Screen1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <NavBar />
      <Sidebar /> */}
      < Login />
      {/* < ResetPasswordForm /> */}
      {/* < Screen1 /> */}
  </React.StrictMode>
);


