import React from 'react';
// import { Grid } from '@material-ui/core';
// import SmallCard from '../components/SmallCard';
import { artists } from '../constants/initialState.json';

import '../constants/dashboard.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default class Dashboard extends React.Component {
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
                <div className="dashboard">
                    <h2 className="dashboard-h2">My tickets</h2>
                    <div className="dashboard-feature">
                        <img className="dashboard-img" src="http://www.stickpng.com/assets/images/5bb36021554c7f08176ec0e4.png" />
                        <img className="dashboard-img" src="https://i.imgur.com/Yq9kJpX.png" />
                        <img className="dashboard-img" src="http://www.stickpng.com/assets/images/5bb36021554c7f08176ec0e4.png" />
                    </div>

                    <div className="dashboard-feature-time">
                        <p>Coming live in: <b>25 min 40 sec</b></p>
                        <button>Live Now</button>
                        <p>Coming live in: <b>25 min 40 sec</b></p>
                    </div>

                    <h2 className="dashboard-h2">Upcoming events</h2>
                    {this.renderArtist()}

                    <h2 className="dashboard-h2">New Artists</h2>
                    {this.renderArtist()}

                </div>

                <Footer />
            </div>
        )
    }
}