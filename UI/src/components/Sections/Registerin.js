import React from 'react';
import '../Sections/Login.css';


import { Link } from 'react-router-dom';


class Registerin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" ref={this.props.containerRef}>
         <div class="login-screen">
        <div className="header"><h1><b>Register</b></h1></div>
        <div className="content">
        
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm password">Confirm Password </label>
              <input type="text" name="confirm password" placeholder="confirm password" />
            </div>
            </div>
         </div>
    
        <button
          className='button1'
          onClick={console.log('hey')}>
             <Link to='/' >
               <span>Register</span>
              </Link>
        </button>
           
        <button
          className='button1'
          onClick={console.log('hey')}>
             <Link to='/' >
               <span>Take me back.</span>
              </Link>
        </button>
        <br />
        <br />
        <br />
         <div><h3> © Copyright 2021. All rights reserved | <span className='textColor' >Powered by the QUALIPSOFT.</span></h3> </div>
      
        </div>
      </div>
      
    );
  }
}
export default Registerin;