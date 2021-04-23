import React from 'react';
import {withRouter} from 'react-router-dom';

import '../Sections/Login.css';
import {FormErrors} from './FormErrors';

import {Link} from 'react-router-dom';
import {LoginReq} from "../../helpers/service";
import { Alert} from '../Services/Alert';


class Login extends React.Component{
    
    
    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    async handleSubmit() {
        const data = {
            "email": this.state.email,
            "password": this.state.password
        }
        try {
            const result = await LoginReq(data);
            console.log(result);
            
            if (result) {
                console.log("loging function")
                localStorage.setItem('Token', result.token);
                this.props.history.push('/home')
                


               }
        } catch (error) {
            //redirect back to login page
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

    
    render(){
        const { autoClose, keepAfterRouteChange } = this.state;
        return(
            <div className="container" ref={this.props.containerRef}>
                <div class="login-screen">
                    <div className="header"><h1><b>Sign In. </b></h1></div>
                    <br/>
                    <div className="content">
                    <div className="error">
                  <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <p class="login-text">
                    <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-lock fa-stack-1x"></i>
                  </span>
                  </p>
                
                  <div className="form">
                      <div className="form-group">
                      
                          <label htmlFor="username">Email</label>
                          <input  type="email" name="email" placeholder="email" required className="form-control" onChange={this.handleChange}  value={this.state.email}
            onChange={this.handleUserInput}  />
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}></div>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}
            onChange={this.handleUserInput}/>
             <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}></div>
                            </div>
                        </div>
                    </div>


                    <button
                        className='button1'
<<<<<<< HEAD
                        onClick={async () => {await this.handleSubmit()} } disabled={!this.state.formValid}>
=======
                    onClick={async () => {await this.handleSubmit(Alert.success('Success!!', { autoClose, keepAfterRouteChange }))} }>
>>>>>>> 78a862d2f231fccefebc33c42fdf9d766a411638
                   
                            <span>Let me in.</span>
                    </button>

                    <button
                        className='button1'>
                        <Link to='/register'>
                            <span>Sign Up.</span>
                        </Link>
                    </button>
                    <br />
                    <br />
                    <br />
                    <div><h3> © Copyright 2021. All rights reserved | <span className='textColor' >Powered by QUALIPSOFT.</span></h3> </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Login);
