import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '90%'
  },
  facilityCardTitle: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 14,
  },
  facilitySubtitle: {
    marginBottom: 12,
    color: '#EC691A',
    fontWeight:'bold'
  },
  facilityAddress: {
      color:'grey',
      marginTop: '10%'
  }
});

export  const FacilityCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.facilityCardTitle} variant="h5" component="h2">
          Facility Name
        </Typography>
        <Typography className={classes.facilitySubtitle} color="textSecondary">
          Facility Type
        </Typography>
        <Typography className={classes.facilityAddress} variant="body2" component="p">
          Facility Address
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Edit </Button>
      </CardActions>
    </Card>
  );
}