import React from 'react';
// import { Grid, Paper, List, IconButton, InputBase } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
// import FrontSlide from './FrontSlide';
import { artists } from '../constants/initialState.json';
// import background from '../constants/images/background.png';

import Header from '../common/Header';
import Footer from '../common/Footer';
import '../constants/home.css';

export default class HomePage extends React.Component {
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
                        <button className="home-button">Buy Now</button>
                    </div>
                </div>
            );
        });
    }

    render() {
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

                <Footer />
            </div>
        )
    }
}