import React from 'react';
import '../constants/landing.css';
import { FirebaseDatabaseMutation } from '@react-firebase/database';
import image from '../constants/images/vrlogo.png';
import wordLogo from '../constants/images/vrfest.png';

const path = "user_emails";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
        }
    }

    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-container">

                    <img className="form-logo" src={image} alt="Logo" />
                    <img className="form-word-logo" src={wordLogo} alt="VRFest" />

                    <h2 className="landing-h2">VR festivals and concerts with your favorite artists.</h2>
                    <h2 className="landing-h2">Sign up to the waitlist for $10 off your first ticket.</h2>

                    <form className="landing-form">
                        <input className="landing-input" onChange={this.handleChange} type="text" placeholder="e.g first.last@gmail.com" />
                        <FirebaseDatabaseMutation type="push" path={path}>
                            {({ runMutation }) => {
                                return (
                                    <div>
                                        <button className="landing-button"
                                            data-testid="test-push"
                                            onClick={async () => {
                                                const { key } = await runMutation({ email: this.state.email });
                                            }}
                                        >
                                            Sign up
                                    </button>
                                    </div>
                                );
                            }}
                        </FirebaseDatabaseMutation>
                    </form>

                </div>
            </div>
        )
    }
}