import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';
import React from 'react';
import DeleteModal from './DeleteModal';
import TaskList from './TaskList';


const TaskItemFay = ({ tasks, handleChange, fetchData, handleUpdate, showInput }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid>
            {
                tasks.map((task, index) => {
                    return <TaskList key={index} task={task} handleChange={handleChange}
                        handleClickOpen={handleClickOpen} open={open} handleClose={handleClose} fetchData={fetchData} handleUpdate={handleUpdate} showInput={showInput}
                    ></TaskList>
                })
            }
            <DeleteModal handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}></DeleteModal>
        </Grid >
    );
};

export default TaskItemFay;