import React from 'react';
// import { Grid, Paper, InputBase } from '@material-ui/core';
import '../constants/landing.css';
import image from '../constants/images/vrlogo.png';
import wordLogo from '../constants/images/vrfest.png';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="landing-container">

                    <img className="form-logo" src={image} alt="Logo" />
                    <img className="form-word-logo" src={wordLogo} alt="VRFest" />

                    <h2 className="landing-h2">VR festivals and concerts with your favorite artists</h2>
                    <h2 className="landing-h2">Sign up to the waitlist for $10 off your first ticket</h2>

                    <form className="landing-form">
                        <input className="landing-input" type="text" placeholder="e.g first.last@gmail.com" />
                        <button className="landing-button">Sign up</button>
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