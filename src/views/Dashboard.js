import React from 'react';
import { Grid } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
import { artists } from '../constants/initialState.json';

import Header from '../common/Header';
import Footer from '../common/Footer';

export default class Dashboard extends React.Component {
    renderArtist = (artist) => (
        <div key={artist.name} className="small-card-region">
            <SmallCard artist={artist} />
        </div>
    )
    render() {
        return (
            <div>
                <Header />
                <div className="dashboard-container">
                    <h2 className="header-date">Upcoming Events</h2>
                    <Grid container direction="column">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </Grid>
                    <h2 className="header-date">New Artists</h2>
                    <Grid container direction="column">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </Grid>
                </div>
                <Footer />
            </div>
        )
    }
}