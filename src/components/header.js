import React from 'react';

import '../assets/index.css';

const Header= () => {
  return (
    <div id='header-main-parent'>
        
            <ul id='nav-menu'>
                <li className='nav-section'>
                    <h5>About</h5>
                </li>
                <li className='nav-section'>
                    <h5>Contact</h5>
                </li>
                <li className='nav-section'>
                    <h5>Skills</h5>
                </li>
                <li className='nav-section'>
                    <h5>Assets</h5>
                </li>
                <li className='nav-section'>
                    <h5>Projects</h5>
                </li>
            </ul>
        
    </div>
  );
}

export default Header;