import React from 'react';
import '../constants/signup.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <img src="https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png" alt="Logo" />

                    <h1 className="h1">Create Account</h1>

                    <p className="label">Sign Up</p>
                    <input type="text" name="fname" placeholder="*First Name" required />
                    <input type="text" name="lname" placeholder="*Last Name" required />
                    <input type="text" name="username" placeholder="*Username" required />
                    <input type="email" name="email" placeholder="*Email" required />
                    <input type="password" name="password" placeholder="*Password" required />

                    <button>Sign In</button>

                    <p>Have an VRFest account? <a href="https://google.com">Sign In</a></p>
                </div>
            </div>
        )
    }
}