import React from 'react';
// import { Grid, Paper, List, IconButton, InputBase } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
// import FrontSlide from './FrontSlide';
import { artists } from '../constants/initialState.json';
import { Button, Typography, Grid, Paper, TextField, Modal } from '@material-ui/core';
import image from '../constants/images/samsung-gear.png';

import Header from '../common/Header';
import Footer from '../common/Footer';
import '../constants/home.css';
import { getToken } from '../utils/LocalCache';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            current_artist: artists[0],
            username: null,
        };
    }

    componentDidMount() {
        this.setState({ username: getToken() });
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

                <div className="home-splash">
                    {/* <img className="home-gear" src={image} alt="Gear VR" /> */}
                    <h1 className="home-h1">Amazing concerts anytime, anywhere.</h1>
                    <button><a className="home-main-button" href="/signup">Sign Up</a></button>
                </div>

                <div className="home-content">
                    <h2 className="home-h2">Events</h2>
                    {this.renderArtist()}
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
                                {/* Card Section */}
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