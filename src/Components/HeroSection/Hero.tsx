import React from 'react';
import './Hero.css';

import profile from '../../images/profile.png';

const Hero: React.FC = () => {
  return (
    <div id='home' className='hero'>
      <img className='hero-img' src={profile} alt='' />
      <h1>
        <span>I'm Arsh,</span> frontend developer based in Mohali.
      </h1>
      <p>
        I am a frontend developer from Mohali, PB with 6 months of experience in
        React Js
      </p>
      <div className='hero-action'>
        <div className='hero-connect'><a href="https://x.com/arshdeepsi74397?s=21">Connect with Me</a></div>
        <div className='hero-resume'>
          <a
            href='https://drive.google.com/file/d/13m2T_iKAcFO7kz6CPEePcIjQJUYoQ_4i/view?usp=sharing' // resume link
            target='_blank'
            rel='noopener noreferrer'
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
