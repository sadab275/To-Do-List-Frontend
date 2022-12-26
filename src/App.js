import Navbar from './Navbar';
import './App.css';
import Input from './Input';
import TaskItem from './TaskItem';
import TaskItemFay from './TaskItemFay';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Input></Input>
      {/* <TaskItem></TaskItem> */}
      <TaskItemFay />

    </div>
  );
}

export default App;
