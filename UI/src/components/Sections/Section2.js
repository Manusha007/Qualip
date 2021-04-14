import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../Sections/Section2.css';
import { Link } from 'react-router-dom';

function Section2() {
  return (
    <div className='container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <h1 >Welcome to <span className='colorText'>QUALIP!!!</span></h1>
      
      <div class="overlay"></div>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
          <Link to='/dashboard'>
            Get Started
           </Link>
        </Button>

        <Button          
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
        
          <Link to='/aboutpage'>LearnMore <i className='far fa-play-circle' /></Link>
          
    
        </Button>
        
      </div>
    </div>
  );
}

export default Section2;
