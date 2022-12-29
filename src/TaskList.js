import React, { useState } from 'react';
import { Checkbox, Grid, FormControlLabel, Button } from '@material-ui/core';
import InputSecond from './InputSecond';

const TaskList = ({ task, handleChange, handleClickOpen, fetchData }) => {
    const [showInput, setShowInput] = useState(false);
    const handleDelete = task => {
        task.isDeleted = true;
        console.log(task);
        fetch(`http://localhost:5000/users/${task?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                fetchData();
                // console.log(data);
            })


    }
    const handleUpdate = (id) => {
        setShowInput(!showInput);

    }



    return (
        <Grid container justifyContent='space-between' style={{ padding: 16 }}>
            {
                showInput ?
                    <>
                        {/* <p>Loading</p> */}
                        <InputSecond task={task} fetchData={fetchData}></InputSecond>

                    </> :
                    <FormControlLabel onChange={() => handleChange(task?._id)} control={<Checkbox name="checkedC" />} checked={task.isChecked} label={task.name} />
            }
            <Grid  >
                <Button onClick={() => handleUpdate(task._id)} style={{ margin: 4 }} variant="contained" color="primary">Edit</Button>
                <Button onClick={() => handleDelete(task)} style={{ margin: 4 }} variant="contained" color="primary">Delete</Button>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
            </Grid>
        </Grid>
    );
};

export default TaskList;