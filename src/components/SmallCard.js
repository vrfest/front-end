import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Button } from '@material-ui/core';
 

const styles = theme => ({
  card: {
    display: 'flex',
    outlineStyle: 'hidden',
    backgroundColor: 'transparent',
    boxShadow: 'none',

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
  const { classes, theme } = props;

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
              <Typography component="h5" variant="h5" color="default">
                {props.artist.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.artist.content}
              </Typography>
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
                <h3 style={{color: 'white'}}>20$</h3>
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