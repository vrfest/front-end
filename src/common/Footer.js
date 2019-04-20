import React from 'react';
import { Paper, Grid, InputBase } from '@material-ui/core';

export default class Footer extends React.Component{
    render(){
        return(
            <Paper className="footer-container" square={true}>
                <Grid direction="column" container>
                    <Grid container direction="row" justify="space-evenly" style={{marginTop:'4%'}}>
                        <div>
                        <Grid container direction="column">
                            <h4 style={{color:'white'}}>Quick Links</h4>
                            <h6 className="footer-link">Data</h6>
                            <h6 className="footer-link">Recomendation</h6>
                            <h6 className="footer-link">Map</h6>
                        </Grid>
                        </div>
                        <div>
                        <Grid container direction="column">
                            <h4 style={{color:'white'}}>Features</h4>
                            <h6 className="footer-link">Data</h6>
                            <h6 className="footer-link">Recomendation</h6>
                            <h6 className="footer-link">Map</h6>
                        </Grid>
                        </div>
                        <div>
                        <Grid container direction="column">
                            <h4 style={{color:'white'}}>Resources</h4>
                            <h6 className="footer-link">Data</h6>
                            <h6 className="footer-link">Recomendation</h6>
                            <h6 className="footer-link">Map</h6>
                        </Grid>
                        </div>
                        <div>
                        <Grid container direction="column">
                            <h4 style={{color:'white'}}>Newsletter</h4>
                            <h6 className="footer-link">You can trust us. we only send promo offers</h6>
                            <Paper className="footer-newleter" square={true}>
                                <Grid container direction="row" justify="space-between">
                                <InputBase className="footer-input" placeholder="Your Email Address" />
                                <Paper square={true} className="footer-button">
                                </Paper> 
                                </Grid>
                            </Paper>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid container direction="row" style={{marginTop:10}}>
                        <p className="copy-footer">
                            Copyright &copy;{new Date().getFullYear()} 
                            All rights reserved
                        </p>
                        <div>
                        <Grid container direction="row" justify="space-evenly">
                            {/* <SocialIcon url="http://facebook.com/jaketrent"/>    
                            <SocialIcon url="http://twitter.com/jaketrent"/>
                            <SocialIcon url="http://instagram.com/jaketrent"/> */}
                        </Grid>
                        </div>      
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}