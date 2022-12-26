import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';
import React from 'react';
import TaskList from './TaskList';

const items = [1, 2, 3, 4];
const TaskItemFay = () => {
    return (
        <Grid>
            {
                items.map((item, index) => {
                    return <TaskList key={index} item={item}></TaskList>
                })
            }
        </Grid>
    );
};

export default TaskItemFay;