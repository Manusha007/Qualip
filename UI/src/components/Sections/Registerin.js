import React from 'react';
import '../Sections/Login.css';
import {FormErrors} from './FormErrors';

import { Link } from 'react-router-dom';
import {signUpReq} from "../../helpers/service";


class Registerin extends React.Component {

    state={
        
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
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    }
  
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
  
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
        <div className="header"><h1><b>Sign Up.</b></h1></div>
        <div className="content">
        <div className="error">
                  <FormErrors formErrors={this.state.formErrors} />
                  </div>

          <div className="form">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" required className="form-control" onChange={this.handleChange}  value={this.state.email}
            onChange={this.handleUserInput} />
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}></div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
<<<<<<< HEAD
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}
            onChange={this.handleUserInput}/>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}></div>

            </div>
            
=======
              <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
            </div>
           
>>>>>>> 78a862d2f231fccefebc33c42fdf9d766a411638
            </div>
         </div>

        <button
          className='button1'
          onClick={this.handleSubmit} disabled={!this.state.formValid}>
             <Link to='/' >
               <span>Sign Up.</span>
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
         <div><h3> © Copyright 2021. All rights reserved | <span className='textColor' >Powered by QUALIPSOFT.</span></h3> </div>

        </div>
      </div>

    );
  }
}
export default Registerin;
