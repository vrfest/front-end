import React from 'react';
// import { Grid, Paper, List, IconButton, InputBase } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
// import FrontSlide from './FrontSlide';
import { artists } from '../constants/initialState.json';
import { Button, Typography, Grid, Paper, TextField, Modal } from '@material-ui/core';
// import background from '../constants/images/background.png';

import Header from '../common/Header';
import Footer from '../common/Footer';
import '../constants/home.css';

export default class HomePage extends React.Component {
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
                    <h1 className="home-h1">Amazing concerts anytime, anywhere.</h1>
                    <button><a className="home-main-button" href="/signup">Sign Up</a></button>
                </div>

                <div className="home-content">
                    <h2 className="home-h2">events</h2>

                    {this.renderArtist()}

                </div>
                {/* Model - todo */}
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
                                {/* <div className="home-card">
                                    <img className="home-card-img" src={current_artist.image} />
                                    <div className="home-card-text">
                                        <h3 className="home-h3">{current_artist.name}</h3>
                                        <h4 className="home-h4">{current_artist.date}</h4>
                                        <p className="home-p">{current_artist.content}</p>
                                    </div>

                                    <div className="home-card-button">
                                        <h3 className="home-h3">{current_artist.cost + '$'}</h3>
                                    </div>
                                </div> */}
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

                                    <ul>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                        <li className="modal-li">I'm a survivor</li>
                                    </ul>

                                </div>

                                <button className="modal-btn">Buy Now</button>

                                {/* <Grid container direction="column">
                                    <Grid container direction="row"></Grid>
                                    <h3>Tracks</h3>
                                    <div>
                                        <Grid container direction="column">
                                            {
                                                current_artist && current_artist.tracks.map((track, index) => (
                                                    <Grid container direction="row" justify="space-between">
                                                        <p>{index}. {track.name}</p>
                                                        <p>{track.time}</p>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </div>
                                </Grid> */}

                            </Grid>
                        }
                    </Paper>
                </Modal>
                <Footer />
            </div>
        )
    }
}