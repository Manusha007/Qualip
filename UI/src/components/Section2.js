import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section2.css';

function Section2() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-5.mp4' autoPlay loop muted />
      <h1 class="ml3">Welcome to QUALIP!!!</h1>
      
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LearnMore <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Section2;
