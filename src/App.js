import './App.css';

import Lanes from './components/Lanes';
import {Nav} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const data = {
  tasks:
  {
  1: {
    id: 1,
    title: "Learn JavaScript",
    description: "read a book on Javascript",
    status: 0,
    fälligkeit: "02.11.21",
  },

  2: {
    id: 2,
    title: "Learn Vue",
    description: "read a book on Vue",
    status: 1,
    fälligkeit: "03.11.21",
  },
  3: {
    id: 3,
    title: "Build something awesome",
    description: "Get an idea",
    status: 0,
    fälligkeit: "04.11.21",
  },
},
  lanes: [
    {
      id: "lane1",
      icon: "list",
      status: 0,
      title: "To Do",
      description: "All tasks you need to do",
    },
    {
      id: "lane2",
      icon: "hourglass-start",
      status: 1,
      title: "In Progress",
      description: "All tasks currently in progress",
    },
    {
      id: "lane3",
      icon: "check-circle",
      status: 2,
      title: "Done",
      description: "All completed tasks",
    },
  ],
}

function App() {
  const [lanes, setLanes] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLanes(data.lanes);
    setTasks(data.tasks);
  }, [ data ]);

  function saveTask(task){
    console.log("SaveTask: %o",task);
    setTasks({...tasks,[task.id]:task});
  }

  function changeState(task){
    console.log("ChangeTask: %o",task);
    task.status +=1;
    setTasks({...tasks,[task.id]:task});
  }

  return (
    <div className="App">
      
      <Nav className ="navbar navbar-dark bg-dark fixed-top" id="nav">
         <span className ="navbar-brand">TASKBOARD</span>
      </Nav>
      <Lanes lanes={lanes} tasks={tasks} saveTask={saveTask} changeState={changeState}></Lanes>
     
    </div >
  );
}

export default App;
