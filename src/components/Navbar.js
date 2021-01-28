import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/logo1.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
  },
  navbarStyle: {
      backgroundColor: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnNavbar:{
      fontColor: 'black'
  },
  imgNavbar:{
       width:'40%',
       justifySelf: 'center'
  },
  navBarContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr'
  }
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbarStyle} position="static">
        <Toolbar className={classes.navBarContainer}>
        <div>
            <Button className={classes.btnNavbar}> Home</Button>
            <Button className={classes.btnNavbar}> Facility</Button>
            <Button className={classes.btnNavbar}> Admin</Button>
            <Button className={classes.btnNavbar}> My Tournaments</Button>
        </div> <img className={classes.imgNavbar} src={logo} alt='logo Trackman' /> 
        <div>   </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}