import React from 'react';
import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';

const TaskList = ({ task }) => {
    return (
        <Grid container justifyContent='space-between' style={{ padding: 16 }}>
            <FormControlLabel control={<Checkbox name="checkedC" />} label={task.name} />
            <Grid  >
                <Button style={{ margin: 4 }} variant="contained" color="primary">Edit</Button>
                <Button style={{ margin: 4 }} variant="contained" color="primary">Delete</Button>
            </Grid>
        </Grid>
    );
};

export default TaskList;