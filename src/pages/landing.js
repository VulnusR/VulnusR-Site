import React from 'react';

import '../assets/index.css';

const LandingPage = () => {
  return (
    <div className="body-full-content">
      <div className='landing-main-parent'>
        <div id='landing-content-main-parent'>
        <div className="upper-border-text">
            <h1>Caleb S. Lockwood</h1>
          </div>


          <div id="landing-content-parent">

          

            
            <div id="landing-content-parent-left" className='landing-bisection'>
             
              <div id='landing-main-content-parent-left' className='landing-content'>
                
              </div>
              
            </div>
            <div id="landing-content-parent-right" className='landing-bisection'>
            
              <div id='landing-main-content-parent-right' className='landing-content'></div>
            
            </div>
          </div>


          <div className="explore-button-container">
            <button>Explore</button>
          </div>

          <div className="lower-border-text">
            <h1>Inspired Web Design</h1>
          </div>


          

         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;