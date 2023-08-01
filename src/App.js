import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing'; // Import your LandingPage component

import './assets/index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/VulnusR" element={<LandingPage />} />
        {/* 
        <Route path="/about" element={<About />} />
        Add more routes for other pages if needed 
        */}
      </Routes>
    </Router>
  );
}

export default App;