import React from 'react';
import { Paper, Grid, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../constants/footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            // <Paper className="footer-container" square={true}>
            //     <Grid direction="column" container>
            //         <Grid container direction="row" justify="space-evenly" style={{ marginTop: '4%' }}>
            //             <div>
            //                 <Grid container direction="column">
            //                     <h4 style={{ color: 'white' }}>Quick Links</h4>
            //                     <Link to="/dashboard"><h6 className="footer-link">Dashboard</h6></Link>
            //                     <Link to="/landing"><h6 className="footer-link">Landing</h6></Link>
            //                     <h6 className="footer-link">Map</h6>
            //                 </Grid>
            //             </div>
            //             <div>
            //                 <Grid container direction="column">
            //                     <h4 style={{ color: 'white' }}>Features</h4>
            //                     <h6 className="footer-link">Data</h6>
            //                     <h6 className="footer-link">Recomendation</h6>
            //                     <h6 className="footer-link">Map</h6>
            //                 </Grid>
            //             </div>
            //             <div>
            //                 <Grid container direction="column">
            //                     <h4 style={{ color: 'white' }}>Resources</h4>
            //                     <h6 className="footer-link">Data</h6>
            //                     <h6 className="footer-link">Recomendation</h6>
            //                     <h6 className="footer-link">Map</h6>
            //                 </Grid>
            //             </div>
            //             <div>
            //                 <Grid container direction="column">
            //                     <h4 style={{ color: 'white' }}>Newsletter</h4>
            //                     <h6 className="footer-link">You can trust us. we only send promo offers</h6>
            //                     <Paper className="footer-newleter" square={true}>
            //                         <Grid container direction="row" justify="space-between">
            //                             <InputBase className="footer-input" placeholder="Your Email Address" />
            //                             <Paper square={true} className="footer-button">
            //                             </Paper>
            //                         </Grid>
            //                     </Paper>
            //                 </Grid>
            //             </div>
            //         </Grid>
            //         <Grid container direction="row" style={{ marginTop: 10 }}>
            //             <p className="copy-footer">
            //                 Copyright &copy;{new Date().getFullYear()}
            //                 All rights reserved
            //             </p>
            //             <div>
            //                 <Grid container direction="row" justify="space-evenly">
            //                     {/* <SocialIcon url="http://facebook.com/jaketrent"/>
            //                 <SocialIcon url="http://twitter.com/jaketrent"/>
            //                 <SocialIcon url="http://instagram.com/jaketrent"/> */}
            //                 </Grid>
            //             </div>
            //         </Grid>
            //     </Grid>
            // </Paper>
            <div className="footer">
                <div className="ft-col-1">
                    <h4 className="ft-h4">Quick Links</h4>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                    <a className="ft-links" href="/landing">Landing</a>
                    <a className="ft-links" href="/">Map</a>
                </div>
                <div className="ft-col-2">
                    <h4 className="ft-h4">Features</h4>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                    <a className="ft-links" href="/landing">Landing</a>
                    <a className="ft-links" href="/">Map</a>
                </div>
                <div className="ft-col-3">
                    <h4 className="ft-h4">Resources</h4>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                    <a className="ft-links" href="/landing">Landing</a>
                    {/* <a href="/">Map</a> */}
                </div>
                <div className="ft-col-4">
                    <h4 className="ft-h4">Search</h4>
                    {/* Social Links */}
                    <a className="ft-links" href="/">Twitter</a>
                    <a className="ft-links" href="/">Instagram</a>
                    <a className="ft-links" href="/">Facebook</a>
                </div>
            </div>
        )
    }
}