import React from 'react';
import { Paper, Grid, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../constants/footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="ft-col-1">
                    <h4 className="ft-h4">Quick Links</h4>
                    <a className="ft-links" href="/homepage">Home Page</a>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                    <a className="ft-links" href="/">Promote Page</a>
                </div>
                <div className="ft-col-2">
                    <h4 className="ft-h4">Features</h4>
                    <a className="ft-links" href="/homepage">Home Page</a>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                    <a className="ft-links" href="/">Promote Page</a>
                </div>
                <div className="ft-col-3">
                    <h4 className="ft-h4">Resources</h4>
                    <a className="ft-links" href="/homepage">Home Page</a>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
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