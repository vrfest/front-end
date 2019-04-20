import React from 'react';
// import { Grid, Paper, InputBase } from '@material-ui/core';
import '../constants/landing.css';
import { FirebaseDatabaseMutation } from '@react-firebase/database';
import image from '../constants/images/vrlogo.png';

const path = "user_emails";

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : null,
        }
    }

    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-container">

                    <img className="form-logo" src={image} alt="Logo" />
                    <h1 className="landing-h1">VRFEST</h1>
                    <h2 className="landing-h2">VR festivals and concerts with your favorite artists</h2>
                    <h2 className="landing-h2">Sign up to the waitlist for $10 off your first ticket</h2>

                    <form className="landing-form">
                        <input className="landing-input" onChange={this.handleChange} type="text" placeholder="e.g first.last@gmail.com" />
                        <FirebaseDatabaseMutation type="push" path={path}>
                            {({ runMutation }) => {
                                return (
                                <div>
                                    <button className="landing-button"
                                    data-testid="test-push"
                                    onClick={async () => {
                                        const { key } = await runMutation({ email : this.state.email });
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
                {/* <Grid container direction="column" alignItems="center">
                    <h3 className="banner-title"> VRFest </h3>
                    <h6 style={{ marginTop: '2%' }}>VR festivals and concerts with your favourite artists.</h6>
                    <h6> Sign up to the waitlist for $10 off your first ticket.</h6>
                    <Paper className="home-paper-search">
                        <InputBase className="home-input" placeholder="Enter your email here" />
                        <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                            <h6 className="home-header" style={{ marginTop: 10 }}>Submit</h6>
                        </Paper>
                    </Paper>
                </Grid>
                <div className="landing-bottom">

                </div> */}
            </div>
        )
    }
}