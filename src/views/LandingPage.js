import React from 'react';
import { Grid, Paper, List } from '@material-ui/core';
import SmallCard from '../components/SmallCard';

export default class LandingPage extends React.Component{
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
                        <div className="small-card-region">
                            <SmallCard />
                        </div>

                        <div className="small-card-region">
                            <SmallCard />
                        </div>
                        <div className="small-card-region">
                            <SmallCard />
                        </div>
                        <div className="small-card-region">
                            <SmallCard />
                        </div>
                    </List>
                    </div>  
                </Paper>
            </Paper>        
        )
    }
}