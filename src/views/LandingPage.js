import React from 'react';
import { Grid, Paper, List } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
import FrontSlide from './FrontSlide';
import { artists } from '../constants/initialState.json';
import background from '../constants/images/background.png';

export default class LandingPage extends React.Component{
    renderArtist = (artist) => (
        <div className="small-card-region">
            <SmallCard artist={artist}/>
        </div>
    )

    render(){
        return(
            <Paper className="landing-paper" square={true}>
                <div className="landing-paper-top">
                    <img src={background} className="background-img"/>
                </div>
                <Paper className="landing-paper-bot" square={true}>
                    <div style={{marginTop: '5%'}}>
                    {/* <List className="small-card-list">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </List> */
                    }
                    <Grid direction="column">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </Grid>
                    </div>  
                </Paper>
            </Paper>        
        )
    }
}