import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const Input = () => {
    const classes = useStyles();
    return (
        <form style={{ display: "flex" }} className={classes.root} noValidate autoComplete="off">
            <TextField style={{ width: "100%", fontWeight: 'bold' }} id="outlined-basic" label="Add a task" variant="outlined" />
        </form>
    );
};

export default Input;