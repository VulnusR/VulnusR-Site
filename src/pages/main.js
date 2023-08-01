import React from 'react';
import Header from '../components/header';
import LandingPage from './landing';

import '../assets/index.css';

const Main= () => {
  return (
    <div id='content-full'>
        <Header />
        <LandingPage />
   </div>
  );
}

export default Main;