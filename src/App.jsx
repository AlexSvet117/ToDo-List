// import { GoTasklist } from "react-icons/go";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    // {id: 1, taskName: "Do the Dishes", completed: false},
    // {id: 2, taskName: "Render your ass", completed: false},
    // {id: 3, taskName: "Go for a walk", completed: false},
])

  const addTask = (newTask) => {
    setTasks((prev) => [...prev,newTask])
  }

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !==id))
  }

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map(task => 
        task.id === id ? { ...task, completed : !task.completed } : task
      )
    )
  }

  return (

    <div className="container justify-content-center">
      <div className="">
        <Navbar/>
        <div className="col-5 mx-auto mt-2">
          <Form addTask={addTask}/>
        </div>
        <TaskList tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete}/>
        <div className="col-5 mx-auto mt-2">
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
