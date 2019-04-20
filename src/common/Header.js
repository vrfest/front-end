import React from 'react';
import '../constants/header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-main">
                    <div className="navbar-left">
                        <p>☰</p>
                    </div>

                    <div className="navbar-right">
                        <p>Login / Signup</p>
                    </div>
                </div>
            </div>
        )
    }
}