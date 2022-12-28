import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';
import React from 'react';
import TaskList from './TaskList';

const items = [1, 2, 3, 4];
const TaskItemFay = ({ tasks }) => {
    return (
        <Grid>
            {
                tasks.map((task, index) => {
                    return <TaskList key={index} task={task}></TaskList>
                })
            }
        </Grid>
    );
};

export default TaskItemFay;