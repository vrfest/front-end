import React from 'react';
import '../constants/signup.css';
import image from '../constants/images/logo-black.png';

import Header from '../common/Header';
import Footer from '../common/Footer';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="signup">
                    <div className="signup-box">
                        <img src={image} alt="Logo" />

                        <h1 className="h1">Create Account</h1>

                        <p className="label">Sign Up</p>
                        <input type="text" name="fname" placeholder="*First Name" required />
                        <input type="text" name="lname" placeholder="*Last Name" required />
                        <input type="text" name="username" placeholder="*Username" required />
                        <input type="email" name="email" placeholder="*Email" required />
                        <input type="password" name="password" placeholder="*Password" required />

                        <button className="btn-signin">Sign Up</button>

                        <p>Have an VRFest account? <a href="/login">Sign In</a></p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}