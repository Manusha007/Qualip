import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Assuring quality at best precision!
        </p>
        
      </section>
      <div class='footer-links'>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/AboutPage' className='social-logo'>
              QUALIP
              
            </Link>
          </div>
          <medium class='website-rights'>QUALIP © 2021</medium>
          <div className="about__img1">
          <a href="https://github.com/Manusha007/Qualip">
          <img src="/images/image3.jpg" alt="qualip"  />
          </a>
          </div>
          <div class='social-icons'>
            
            <a href='https://www.facebook.com/QualipSoft/'
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
           </a>
           <a href='https://www.instagram.com/qualipsoft/'
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a href='https://www.youtube.com/channel/UCsB1hmOn31hI0uJsYU8zhlQ'
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
          </a>
            <a href='https://twitter.com/SoftQualip'
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
           </a>            
          </div>
        </div>
      </section>
      <br />
      <br />
      <div><h3> © Copyright 2021. All rights reserved | <span className='textColor' >Powered by the QUALIPSOFT.</span></h3> </div>
    </div>
  );
}

export default Footer;
