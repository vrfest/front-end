import React from 'react';
import '../constants/header.css';
import { Link } from "react-router-dom";
import icon from '../constants/images/icon-hamburger.png';
import brand from '../constants/images/vrfest.png';
import { Grid, Avatar } from '@material-ui/core';
import { Button, Typography, Paper, Modal } from '@material-ui/core';
import { clearToken, getToken } from '../utils/LocalCache';

export default class Header extends React.Component {
    state = {
        open: false,
        user : getToken(),
    }

    handleOpen = () => {
        this.setState({ open: true});
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = () => {
        this.setState({ open: false });
    };

    handleLogout = () => {
        clearToken();
        this.handleClose();
        try{
            this.props.history.push('/homepage');
            
        }catch(e){
            console.log(e);
        }
    }
    render() {
        const { user } = this.state;
        return (
            <div className="navbar">
                <div className="navbar-main">
                    <div className="navbar-left">
                        <img className="navbar-menu" src={icon} alt="Menu Icon" />
                    </div>

                    <div className="navbar-right">
                    {
                        getToken() && 
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Avatar onClick={this.handleOpen} alt="Remy Sharp" src={user.avatar} className="big-avatar" />
                            <h4 style={{color:'white', marginLeft : 10}}>{user.username}</h4>
                        </Grid>
                    }
                    {
                        !getToken() &&
                        <Link to='/login'><button className="navbar-btn">Sign up / Login</button></Link>
                    }
                        {/* <p><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link> / <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link></p> */}
                    </div>
                    {/* <div className="brand">vrfest</div> */}
                    <a className="brand" href="/homepage"><img className="brand" src={brand} alt="VRFest Logo" /></a>
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                <Paper className="logout-modal">
                    <Grid alignItems="center" justify="space-between" container direction='column' style={{marginTop: 50}}>
                    <Typography variant="h2" id="modal-title" >
                        Want to logout?
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={this.handleLogout} style={{marginTop: 30}}>
                        OK
                    </Button>
                    </Grid>
                </Paper>
            </Modal>

            </div>
        )
    }
}