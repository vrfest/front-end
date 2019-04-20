import React from 'react';
import {Grid, Paper, InputBase} from '@material-ui/core';

export default class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <Grid container direction="column" alignItems="center">
                <h3 className="banner-title"> VRFest </h3>
                <h6 style={{marginTop: '2%'}}>VR festivals and concerts with your favourite artists.</h6>
                <h6> Sign up to the waitlist for $10 off your first ticket.</h6>
                <Paper className="home-paper-search">
                    <InputBase className="home-input" placeholder="Enter your email here" />
                    {/* <Typography className="home-input">Get your store recomendation</Typography> */}
                    <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                        <h6 className="home-header" style={{marginTop: 10}}>Submit</h6>
                    </Paper>
                </Paper>
                </Grid> 
                <div className="landing-bottom">

                </div>
            </div>    
        )
    }
}