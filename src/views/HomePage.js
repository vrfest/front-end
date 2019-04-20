import React from 'react';
import { Grid, Paper, List, IconButton, InputBase } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
import FrontSlide from './FrontSlide';
import { artists } from '../constants/initialState.json';
import background from '../constants/images/background.png';

export default class HomePage extends React.Component{
    renderArtist = (artist) => (
        <div key={artist.name} className="small-card-region">
            <SmallCard artist={artist}/>
        </div>
    )

    render(){
        return(
            <div className="landing-paper">
                <div className="landing-paper-top">
                    <img src={background} className="background-img" alt=""/>
                </div>
                <div className="landing-paper-bot">
                    <div className="event-title">
                        <h2 className="header-date">Event</h2>
                    </div>
                    <div style={{marginTop: '1%'}}>
                    {/* <List className="small-card-list">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </List> */
                    }
                    <Grid container direction="column">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </Grid>
                    </div>  
                </div>
            </div>        
        )
    }
}