import React from 'react';
import '../constants/header.css';
// import { Link } from "react-router-dom";
import icon from '../constants/images/icon-hamburger.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-main">
                    <div className="navbar-left">
                        <img className="navbar-menu" src={icon} alt="Menu Icon" />
                    </div>

                    <div className="navbar-right">
                        <button className="navbar-btn"><a href="/login">Sign up / Login</a></button>
                        {/* <p><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link> / <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link></p> */}
                    </div>
                    <div className="brand">vrfest</div>
                </div>
            </div>
        )
    }
}