import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: '5%',
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

export  const FacilityCard = ({id, name, address, type}) => {
  const classes = useStyles();

  return (
    <Card key={id} className={classes.root}>
      <CardContent>
        <Typography className={classes.facilityCardTitle} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.facilitySubtitle} color="textSecondary">
          {type}
        </Typography>
        <Typography className={classes.facilityAddress} variant="body2" component="p">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Edit </Button>
      </CardActions>
    </Card>
  );
}