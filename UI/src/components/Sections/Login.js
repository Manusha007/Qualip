import React from 'react';
import '../Sections/Login.css';
import loginImg from "../../login.svg";

import { Link } from 'react-router-dom';



class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
        <div className="container" ref={this.props.containerRef}>
        <div className="header"><h1><b>Login</b></h1></div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
     
        <button
          className='button1'
         
          onClick={console.log('hey')}>
             <Link to='/Home' >
               <span>Login</span>
               </Link>
        </button>

        <button
          className='button1'
          onClick={console.log('hey')}>
          <Link to='/Register'>
            <span>Register</span>
            </Link>
          </button>
        </div>
        
     
        )
    }
}

export default Login;