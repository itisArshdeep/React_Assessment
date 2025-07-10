import React from 'react';
import './About.css';

//icons
import profile from '../../images/profile.png';
import bow from '../../images/bow.png';

const About: React.FC = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={bow} alt='' />
      </div>
      <div className='about-section'>
        <div className='about-left'>
          <img src={profile} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dicta.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident aliquam dolorem doloribus quidem rerum tempore
              architecto.
            </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>{' '}
              <hr style={{ width: '50%' }} className='hr-line' />
            </div>
            <div className='about-skill'>
              <p>JS</p> <hr style={{ width: '60%' }} className='hr-line' />
            </div>
            <div className='about-skill'>
              <p>REACT</p> <hr style={{ width: '100%' }} className='hr-line' />
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>1st Price</h1>
          <p>at Smart India Hack-a-thon</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>90+</h1>
          <p>Pojects Completed</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>Successfully</h1>
          <p>Submitted freelance Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
