import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FacilityCard } from './FacilityCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'10px 10% 10px 10%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const GridContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={6} sm={4}>
            <FacilityCard />
        </Grid>
        <Grid item xs={4} sm={4}>
            <FacilityCard />
        </Grid>
        <Grid item xs={4} sm={4}>
            <FacilityCard />
        </Grid>
      </Grid>
    </div>
  );
}