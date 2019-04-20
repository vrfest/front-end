import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

export default class Header extends React.Component {
    render() {
        return (
            <Paper className="header-navbar" square={true}>
                <Grid container alignItems="center" justify="center" direction="column">
                    {/* <div> */}
                    <Grid className="header-box" container direction="row" justify="space-between">
                        <Grid>☰</Grid>
                        <Grid>Brand</Grid>
                        <div className="header-login-box">
                            <Grid className="header-login-box-child" container direction="row" justify="space-around">
                                <Typography style={{ marginRight: 10 }}>Login</Typography>
                                <Typography>Logout</Typography>
                            </Grid>
                        </div>
                    </Grid>
                    {/* </div> */}

                </Grid>

            </Paper>
        )
    }
}