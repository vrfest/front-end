import React from 'react';
import '../constants/header.css';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-main">
                    <div className="navbar-left">
                        <p>☰</p>
                    </div>

                    <div className="navbar-right">
                        <p><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link> / <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}