import React from 'react';
import { Grid, Paper, List } from '@material-ui/core';
import SmallCard from '../components/SmallCard';
import { artists } from '../constants/initialState.json';

export default class LandingPage extends React.Component{
    renderArtist = (artist) => (
        <div className="small-card-region">
            <SmallCard artist={artist}/>
        </div>
    )

    render(){
        return(
            <Paper className="landing-paper" square={true}>
                <Paper className="landing-paper-top" square={true}>
                </Paper>
                <Paper className="landing-paper-bot" square={true}>
                    <Grid>

                    </Grid>
                    <div style={{marginLeft: '10%', marginTop: '2%'}}>
                    <List className="small-card-list">
                        {
                            artists.map(artist => (this.renderArtist(artist)))
                        }
                    </List>
                    </div>  
                </Paper>
            </Paper>        
        )
    }
}