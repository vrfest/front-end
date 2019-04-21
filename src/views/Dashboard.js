import React from 'react';
// import { Grid } from '@material-ui/core';
// import SmallCard from '../components/SmallCard';
import { artists } from '../constants/initialState.json';
import { newArtists } from '../constants/newArtist.json';
import { Button, Typography, Grid, Paper, TextField, Modal } from '@material-ui/core';

import '../constants/dashboard.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import card from '../constants/images/card.png';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            current_artist: artists[0],
        };
    }

    renderArtist = () => {
        return artists.map((artist) => {
            return (
                <div className="home-card">
                    <img className="home-card-img" src={artist.image} />

                    <div className="home-card-text">
                        <h3 className="home-h3">{artist.name}</h3>
                        <h4 className="home-h4">{artist.date}</h4>
                        <p className="home-p">{artist.content}</p>
                    </div>

                    <div className="home-card-button">
                        <h3 className="home-h3">{artist.cost + '$'}</h3>
                        <button className="home-button" onClick={() => this.handleOpen(artist)}>Buy Now</button>
                    </div>
                </div>
            );
        });
    }

    renderNewArtist = () => {
        return newArtists.map((newArtists) => {
            return (
                <div className="home-card">
                    <img className="home-card-img" src={newArtists.image} />

                    <div className="home-card-text">
                        <h3 className="home-h3">{newArtists.name}</h3>
                        <h4 className="home-h4">{newArtists.date}</h4>
                        <p className="home-p">{newArtists.content}</p>
                    </div>

                    <div className="home-card-button">
                        <h3 className="home-h3">{newArtists.cost + '$'}</h3>
                        <button className="home-button" onClick={() => this.handleOpen(newArtists)}>Buy Now</button>
                    </div>
                </div>
            );
        });
    }

    handleOpen = (artist) => {
        this.setState({ open: true, current_artist: artist });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    handleSubmit = () => {
        this.setState({ open: false });
    };

    render() {
        const { current_artist } = this.state;
        return (
            <div>
                <Header />
                <div className="dashboard">
                    <h2 className="dashboard-h2">My Wallet</h2>
                    <div className="dashboard-wallet">
                        <div className="dashboard-card">
                            <img className="dashboard-card-img" src={card} alt="Wallet" />
                        </div>

                        <div className="dashboard-wallet-text">
                            <h4 className="wallet-address">Wallet Address:</h4>
                            <h4 className="wallet-address-value">15b768da67802179faf8db360cf3dc8fb0eab3f84c70e7</h4>

                            <div className="wallet-balance">
                                <h3 className="wallet-balance-value">Balance</h3>
                                <h3 className="wallet-balance-value">300 VRT</h3>
                            </div>

                        </div>
                    </div>

                    <h2 className="dashboard-h2">My tickets</h2>
                    <div className="dashboard-feature">
                        <img className="dashboard-img" src="https://charts-static.billboard.com/img/2011/02/ariana-grande-ypy.jpg" />
                        <img className="dashboard-img" src="https://i.imgur.com/Yq9kJpX.png" />
                        <img className="dashboard-img" src="https://pbs.twimg.com/profile_images/1054790574086201345/hnnkdKJm_400x400.jpg" />
                    </div>

                    <div className="dashboard-feature-time">
                        <p>Coming live in: <b>25 min 40 sec</b></p>
                        <button>Live Now</button>
                        <p>Coming live in: <b>25 min 40 sec</b></p>
                    </div>

                    <h2 className="dashboard-h2">Upcoming events</h2>
                    {this.renderArtist()}

                    <h2 className="dashboard-h2">New Artists</h2>
                    {this.renderNewArtist()}

                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="modal-style"
                >
                    <Paper className="contact-form-confirm">
                        {current_artist &&
                            <Grid alignItems="center" justify="space-evenly" container direction='column' style={{ marginTop: 50 }}>
                                <div className="modal-card">
                                    <img className="modal-img" src={current_artist.image} />
                                    <div className="modal-text">
                                        <div className="modal-flex">
                                            <h1 className="modal-h1">{current_artist.name} <b>(VR)</b></h1>
                                            <h1 className="modal-h1">{current_artist.cost}$</h1>
                                        </div>
                                        <h2 className="modal-h2">8:00pm, {current_artist.date} (Eastern Standard Time)</h2>
                                        <p className="modal-p">{current_artist.content}</p>
                                    </div>
                                </div>

                                <div className="modal-tracks">
                                    <h3>Tracks</h3>

                                    <div className="modal-li">
                                        <p> • Fire and Rayn</p>
                                        <p>0:00</p>
                                    </div>
                                    <div className="modal-li">
                                        <p> • Gomd</p>
                                        <p>0:00</p>
                                    </div>
                                    <div className="modal-li">
                                        <p> • Mind Games</p>
                                        <p>0:00</p>
                                    </div>
                                    <div className="modal-li">
                                        <p> • Faded </p>
                                        <p>0:00</p>
                                    </div>

                                </div>

                                <button className="modal-btn">
                                    <a href="/payment">Buy Now</a>
                                </button>

                            </Grid>
                        }
                    </Paper>
                </Modal>
                <Footer />
            </div>
        )
    }
}