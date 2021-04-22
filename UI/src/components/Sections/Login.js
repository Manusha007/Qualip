import React from 'react';
import {withRouter} from 'react-router-dom';

import '../Sections/Login.css';

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

    
    render(){
        const { autoClose, keepAfterRouteChange } = this.state;
        return(
            <div className="container" ref={this.props.containerRef}>
                <div class="login-screen">
                    <div className="header"><h1><b>Sign In. </b></h1></div>
                    <br/>
                    <div className="content">
                        <p class="login-text">
            <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-lock fa-stack-1x"></i>
          </span>
                        </p>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>


                    <button
                        className='button1'
                    onClick={async () => {await this.handleSubmit(Alert.success('Success!!', { autoClose, keepAfterRouteChange }))} }>
                   
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
                    <div><h3> © Copyright 2021. All rights reserved | <span className='textColor' >Powered by the QUALIPSOFT.</span></h3> </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Login);
