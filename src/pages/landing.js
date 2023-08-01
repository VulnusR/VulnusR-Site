import React from 'react';

import '../assets/index.css';


const LandingPage = () => {
  return (
    <div className="body-full-content">
      <div className='landing-main-parent'>
        <div id='landing-content-main-parent'>
          <div id="landing-content-parent">
            <div id="landing-content-parent-left" className='landing-bisection'>
             
              <div id='landing-main-content-parent-left' className='landing-content'>
                <div id='landing-upper-parent-left' className='landing-img-section-parent'>
                  <div id='landing-upper-left' className='landing-img-section'>
                    <div id='landing-upper-left-design'></div>
                    <div id='landing-upper-left-img'></div>
                  </div>

                </div>
                <div className='landing-lower-parent'>

                </div>
                
              </div>
              
            </div>
            <div id="landing-content-parent-right" className='landing-bisection'>
            
              <div id='landing-main-content-parent-right' className='landing-content'>
                <div id='landing-upper-parent-right'>
                  

                </div>
                <div id='landing-lower-parent-right' className='landing-img-section-parent'>
                  <div id='landing-lower-right' className='landing-img-section' >
                    <div id='landing-lower-right-design'></div>
                    <div id='landing-lower-right-img'></div>
                  </div>

                </div>
                
              </div>
              
            
            </div>
          </div>


          

          


          

         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;