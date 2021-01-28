import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: '10%',
        marginTop: '2%',
        display: 'grid',
        color: '#EC691A',
        border:'none'
      }, 
      'root:hover':{
        border: 'none'
      }
    }
  }));

  

export const AddFacility = (props) => {
  const [formInput, setFormInput] = useState({
    id: null,
    name:'',
    address:'',
    type:''
})
const [open, setOpen] = useState(false);
const [radioValue, setRadioValue] = useState(' ');

  const handleChange = (event) => {
    setRadioValue(event.target.value)
    setFormInput({
    ...formInput,
    [event.target.name]: event.target.value.trim()
    
})
console.log(event.target.value)};

const handleSubmit = (event) =>{
    event.preventDefault()
    props.addFacilitie(formInput)
    event.target.reset()
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.btnAddFacilitie}>
                Add Facilitie
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <form onSubmit={handleSubmit} >
                <DialogTitle id="form-dialog-title">Add Facilitie</DialogTitle>
                <DialogContent>
                <TextField
                    onChange={handleChange}
                    autoFocus   
                    margin="dense"
                    id="name"
                    name="name"
                    label="Facilitie Name"
                    type="text"
                    fullWidth
                />

                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="address"
                    name="address"
                    label="Facilitie Address"
                    type="text"
                    fullWidth
                />

                <RadioGroup row style={{justifyContent:'center', marginTop:'30px'}} aria-label="gender" name="type" value={radioValue} onChange={handleChange}>
                <FormControlLabel value="Range" control={<Radio />} label="Range" />
                <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
                </RadioGroup>
                </DialogContent>
                <DialogActions className={classes.btnSubmitContainer}>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button  type='submit' onClick={handleClose} className={classes.btnAddFacilitie}>
                    Save
                </Button>
                </DialogActions>
            </form>
            </Dialog>
        </div>
    )
}




