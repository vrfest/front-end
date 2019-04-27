import React from 'react';
import '../constants/css/login.css';
import image from '../constants/images/logo-black.png';

import Header from '../common/Header';
import Footer from '../common/Footer';

import { users } from '../constants/initialState.json';
import { setToken } from '../utils/LocalCache';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
        }
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePass = (event) => {
        this.setState({ password: event.target.value });
    }

    async handleSubmit() {
        let checkU = await users.filter(user => user.email === this.state.email);   
        try{
            if(checkU[0].password === this.state.password){
                setToken(checkU[0]);
                this.props.history.push('/dashboard');
            }else{
                console.log("Fail");
            }
        }catch(e){
            console.log(e);
        }     
    }

    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="login-box">
                        <img className="form-logo" src={image} alt="Logo" />

                        <h1 className="h1">Your Community Awaits</h1>

                        <p className="label">Sign In</p>
                        <input type="email" onChange={this.handleChangeEmail} placeholder="Email" required/>
                        <input type="password" onChange={this.handleChangePass} name="password" placeholder="Password" required />

                        <div className="form-row">
                            <div className="form-row2">
                                <input type="checkbox" id="re-me" placeholder="Password" />
                                <label htmlFor="re-me">Remember Me</label>
                            </div>

                            <a href="/signup"> Forgot Your Password?</a>
                        </div>
                        <button className="btn-signin" onClick={() => this.handleSubmit()}>Sign In</button>

                        <p>Don't have an VRFest account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}