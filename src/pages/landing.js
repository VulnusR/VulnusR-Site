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
                <div id='landing-lower-parent-left' className='landing-title-text-section'>
                <h2 id='landing-text-left' className='black-text landing-text'>
                  UI Design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Web Development&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  UX Design
                </h2>


                </div>
              </div>
            </div>
            <div id="landing-content-parent-right" className='landing-bisection'>
              <div id='landing-main-content-parent-right' className='landing-content'>
                <div id='landing-upper-parent-right' className='landing-title-text-section'>
                  <h1 id='landing-text-right' className='white-text landing-text'>Caleb S. Lockwood</h1>
                  

                </div>
                <div id='landing-lower-parent-right' className='landing-img-section-parent'>
                  <div id='landing-lower-right' className='landing-img-section'>
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