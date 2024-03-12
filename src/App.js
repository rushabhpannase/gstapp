import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; // Adjust the path as necessary
import ResetPasswordForm from './ResetPasswordForm'; // Adjust the path as necessary
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
