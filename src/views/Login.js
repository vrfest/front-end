import React from 'react';
import '../constants/login.css';
import image from '../constants/images/logo-black.png';

import Header from '../common/Header';
import Footer from '../common/Footer';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="login-box">
                        <img className="form-logo" src={image} alt="Logo" />

                        <h1 className="h1">Your Community Awaits</h1>

                        <p className="label">Sign In</p>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />

                        <div className="form-row">
                            <div className="form-row2">
                                <input type="checkbox" id="re-me" placeholder="Password" />
                                <label for="re-me">Remember Me</label>
                            </div>

                            <a href="/signup"> Forgot Your Password?</a>
                        </div>
                        <button className="btn-signin">Sign In</button>

                        <p>Don't have an VRFest account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}