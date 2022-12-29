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

const InputSecond = ({ fetchData }) => {
    const classes = useStyles();
    const [task, setTask] = useState('');

    // const handleChange = (e) => {
    //     const task = e.target.value;
    //     setTask(task);
    // }

    const handlePost = async (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
            const task = e.target.value

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "name": task,
                "isChecked": false,
                "isDeleted": false
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:5000/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    fetchData();
                    console.log(result)
                })
                .catch(error => console.log('error', error));

            setTask(task);
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