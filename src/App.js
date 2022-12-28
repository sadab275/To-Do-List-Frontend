import Navbar from './Navbar';
import './App.css';
import Input from './Input';
import TaskItem from './TaskItem';
import TaskItemFay from './TaskItemFay';
import { useEffect, useState } from 'react';





function App() {

  const [tasks, settasks] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => settasks(data));

  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Input></Input>
      {/* <TaskItem></TaskItem> */}
      <TaskItemFay tasks={tasks} />

    </div>
  );
}

export default App;
