import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Button } from '@material-ui/core';
 

const styles = theme => ({
  card: {
    display: 'flex',
    outlineStyle: 'hidden',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    //width: '%',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
      <Grid container direction="row" justify="space-between" >
        <Card className={classes.card}>
        <Grid container direction="row" justify="space-evenly">
          <CardMedia
              className={classes.cover}
              image={props.artist.image}
              title="Live from space album cover"
            />
            <div className={classes.details}>
            <CardContent className={classes.content}>
              <h2 className="header-artist">
                {props.artist.name}
              </h2>
              <h4 className="header-date">
                {props.artist.date}
              </h4>
              <h6 className="header-artist">
                {props.artist.content}
              </h6>
            </CardContent>
            {/* <div className={classes.controls}>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div> */}
          </div>
        </Grid>
        </Card>
        <div className="button-money">
            <div style={{marginTop:'2%'}}>
              <Grid container alignItems="center" direction="column">
                <h2 className="header-artist">{props.artist.cost}$</h2>
                <Button>Buy</Button>
              </Grid>
            </div>
        </div>
      </Grid>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);