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

export const CardsContainer = ({facilities}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
      { 
            
            facilities.map( (prop) => {
                  return <Grid item lg={4}>
                        <FacilityCard 
                            id={prop.id}
                            name={prop.name}
                            address={prop.address}
                            type={prop.type}
                        />
                     </Grid>
          })
          // :
          // <div> <h2> Loading.... </h2></div>
        }
      </Grid>
    </div>
  );
}