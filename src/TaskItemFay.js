import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';
import React from 'react';
import TaskList from './TaskList';


const TaskItemFay = ({ tasks, handleChange }) => {
    return (
        <Grid>
            {
                tasks.map((task, index) => {
                    return <TaskList key={index} task={task} handleChange={handleChange}></TaskList>
                })
            }
        </Grid>
    );
};

export default TaskItemFay;