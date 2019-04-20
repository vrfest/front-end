import React from 'react';
import { Paper, Grid, CardMedia } from '@material-ui/core';

export default class SmallCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Paper className="artist-card">
                <Grid container direction="row" justify="space-between">
                    <h3>{this.props.artist.name}</h3>
                    <CardMedia 
                        className="card-cover"
                        image={this.props.artist.image}
                    />
                </Grid>
            </Paper>
        )
    }
}