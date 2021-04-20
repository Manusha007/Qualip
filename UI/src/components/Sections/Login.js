import React from 'react';
import '../Sections/Login.css';

import {Link} from 'react-router-dom';
import {loginReq} from "../../helpers/service";

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
            const result = await loginReq(data);
            if (result) {
                localStorage.setItem('Token', result.token);

               }
        } catch (error) {
            //redirect back to login page
        }
    }

    render(){
        return(
            <div className="container" ref={this.props.containerRef}>
                <div class="login-screen">
                    <div className="header"><h1><b>L o g i n </b></h1></div>
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
                    onClick={async () => {await this.handleSubmit()} }>
                            <span>Let me in.</span>
                    </button>

                    <button
                        className='button1'>
                        <Link to='/register'>
                            <span>Register</span>
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

export default Login;
