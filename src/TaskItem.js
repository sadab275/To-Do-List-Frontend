import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkboxx from './Checkboxx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        border: "1px solid black"
    },
    paper: {
        boxShadow: "none",
        display: 'flex',
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",

    },

}));

const TaskItem = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <Paper className={classes.paper}> <Checkboxx ></Checkboxx>
                        <p>Task Item</p></Paper>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: "center" }} spacing={3} xs={4}>
                    <Button variant="contained" color="primary">
                        Edit
                    </Button>
                    <Button variant="contained" color="primary">
                        Delete
                    </Button>
                </Grid>

            </Grid>
        </div >
    );
};

export default TaskItem;