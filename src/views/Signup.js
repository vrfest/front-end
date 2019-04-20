import React from 'react';
import '../constants/signup.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <img src="https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png" alt="Logo" />

                    <h1 className="h1">Sign up</h1>

                    <p className="label">Sign In</p>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />

                    <div className="form-row">
                        <div className="form-row2">
                            <input type="checkbox" id="re-me" placeholder="Password" />
                            <label for="re-me">Remember Me</label>
                        </div>

                        <a href="https://google.com"> Forgot Your Password?</a>
                    </div>
                    <button>Sign In</button>

                    <p>Don't have an VRFest account? <a href="https://google.com">Sign Up</a></p>
                </div>
            </div>
        )
    }
}