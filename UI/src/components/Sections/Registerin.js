import React from 'react';
import '../Sections/Login.css';

import { Link } from 'react-router-dom';
import {signUpReq} from "../../helpers/service";


class Registerin extends React.Component {

    state={
        username: '',
        email:'',
        password:''
    }


    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = () => {
        const data = {
            "email": this.state.email,
            "password": this.state.password
        }
        try {
            const result = signUpReq(data);
            if (result) {
                setTimeout(() => {
                    //redirect to home page
                }, 3000);
            }
        } catch (error) {
            //redirect back to register page
        }
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
              <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirm password">Confirm Password </label>
              <input type="password" name="confirmPassword" placeholder="confirm password" />
            </div>
            </div>
         </div>

        <button
          className='button1'
          onClick={this.handleSubmit}>
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
