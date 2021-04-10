import React from 'react';
import '../Sections/Login.css';
import loginImg from "../../login.svg";

import { Link } from 'react-router-dom';


class Registerin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" ref={this.props.containerRef}>
        <div className="header"><h1><b>Register</b></h1></div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
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
          
         
        </div>
      
    );
  }
}
export default Registerin;