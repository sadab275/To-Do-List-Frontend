import Navbar from './Navbar';
import './App.css';
import Input from './Input';

import TaskItemFay from './TaskItemFay';
import { useEffect, useState } from 'react';





function App() {

  const [tasks, settasks] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => settasks(data));

  }

  useEffect(() => {
    fetchData();
  }, [tasks])

  const handleChange = id => {
    const newTask = tasks.find(task => task?._id === id)
    const updatedTask = { ...newTask, isChecked: !newTask?.isChecked }
    console.log(updatedTask);
    // console.log(newTask);

    fetch(`http://localhost:5000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })


  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Input></Input>
      {/* <TaskItem></TaskItem> */}
      <TaskItemFay handleChange={handleChange} tasks={tasks} />

    </div>
  );
}

export default App;
