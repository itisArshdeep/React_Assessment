import React from 'react';
import './Contact.css';

// bg-icon
import bow from '../../images/bow.png';

// icons
import location_icon from '../../images/location.png';
import mail_icon from '../../images/mail.png';
import call_icon from '../../images/call.png';

const Contact: React.FC = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={bow} alt='' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut saepe
            dolor consequuntur dolores, id veniam eius dolore voluptas vero?
            Placeat quam veniam aspernatur?
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' />
              <p>deepsingh13131212@gmail.xom</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' />
              <p>+91 790***0001</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' />
              <p>Mohali ,PB</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label>Write your message</label>
          <textarea
            name='message'
            rows={8}
            placeholder='Enter your message'
            required
          ></textarea>
          <button type='submit' className='contact-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
