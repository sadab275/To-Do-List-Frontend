import React, { useState } from 'react';
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

const InputSecond = ({ fetchData, task }) => {
    const classes = useStyles();
    const [tasks, setTasks] = useState('');

    // const handleChange = (e) => {
    //     const task = e.target.value;
    //     setTask(task);
    // }

    const handlePost = async (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
            const taskName = e.target.value;


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "name": taskName,
                "isChecked": false,
                "isDeleted": false
            });

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://localhost:5000/users/${task?._id}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    fetchData();
                    console.log(result)
                })
                .catch(error => console.log('error', error));

            setTasks(taskName);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex" }} className={classes.root} noValidate autoComplete="off">
            <TextField
                onKeyUp={handlePost}
                // onChange={handleChange} 
                style={{ width: "100%", fontWeight: 'bold' }} id="outlined-basic" label="Edit Task Name" variant="outlined" />
        </form>
    );
};

export default InputSecond;