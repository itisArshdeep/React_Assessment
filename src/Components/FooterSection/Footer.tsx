import React from 'react';
import './Footer.css';

import user_icon from '../../images/user.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h1>Arshdeep</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            totam iste veniam.
          </p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='' />
            <input type='email' />
          </div>
          <div className='footer-hire'><a href="https://www.linkedin.com/in/arshdeep-singh-3750851aa/">Hire Me</a></div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>
          © 2025 July Arshdeep Singh. All rights reserved
        </p>
        <div className='footer-bottom-right'>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
