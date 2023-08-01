import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Main from './pages/main'

import './assets/index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/VulnusR" element={<Main />} />
        {/* 
        <Route path="/about" element={<About />} />
        Add more routes for other pages if needed 
        */}
      </Routes>
    </Router>
  );
}

export default App;