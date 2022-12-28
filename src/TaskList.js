import React from 'react';
import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';

const TaskList = ({ task, handleChange }) => {

    const handleDelete = task => {
        task.isDeleted = true
        console.log(task);

    }


    return (
        <Grid container justifyContent='space-between' style={{ padding: 16 }}>
            <FormControlLabel onChange={() => handleChange(task?._id)} control={<Checkbox name="checkedC" />} label={task.name} />
            <Grid  >
                <Button style={{ margin: 4 }} variant="contained" color="primary">Edit</Button>
                <Button onClick={() => handleDelete(task)} style={{ margin: 4 }} variant="contained" color="primary">Delete</Button>
            </Grid>
        </Grid>
    );
};

export default TaskList;