import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section1.css';
import { Link } from 'react-router-dom';

function Section1() {

  
  return (
    <div className='hero-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <h1>Qualip</h1>
      <p>Select the Report Type</p>
      
      <div className='hero-btns'>
      <Link to='/presentReports'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Present Report
        </Button>
     </Link>      

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Past Report
        </Button>
      </div>
    </div>
  );
}

export default Section1;