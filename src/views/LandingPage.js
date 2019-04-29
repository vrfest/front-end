import React from 'react';
import '../constants/css/landing.css';
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';
// import image from '../constants/images/logo.png';
//import logo from '../constants/images/vrfest.png';
import Clock from "./Clock";


const path = "user_emails";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            count: Math.floor((1555894800000 - (new Date()).getTime()) / 1000),
            running: false,
        }
        this.handleStart()
    }


    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    countProperties = (obj) => {
        var count = 0;

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                ++count;
        }

        return count;
    }

    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                { count: newCount >= 0 ? newCount : 0 }
            );
        }, 1000);
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-container">
                    {/* <img className="form-logo" src={image} alt="Logo" /> */}
                    <img className="form-logo" src={logo} alt="Logo" />
                    <h2 className="landing-h2">Sign up before the time expires to get $10 off your first VR concert ticket.</h2>
                    <Clock time={this.state.count} />
                    <form className="landing-form">
                        <input className="landing-input" onChange={this.handleChange} type="text" placeholder="e.g first.last@gmail.com" />
                        <FirebaseDatabaseMutation type="push" path={path}>
                            {({ runMutation }) => {
                                return (
                                    <div>
                                        <button className="landing-button"
                                            data-testid="test-push"
                                            onClick={async () => {
                                                await runMutation({ email: this.state.email });
                                            }}
                                        >
                                            Sign up
                                    </button>
                                    </div>
                                );
                            }}
                        </FirebaseDatabaseMutation>
                    </form>
                    <FirebaseDatabaseNode path={path}>
                        {d => {
                            return d.isLoading === true ? (
                                "Loading"
                            ) : (
                                    <h2 className="landing-h2"><span className="counter">{this.countProperties(d.value)}</span> people have saved $10 by signing up. <span className="join-now">Join them now!</span></h2>
                                );
                        }}
                    </FirebaseDatabaseNode>
                </div>
            </div>
        )
    }
}
