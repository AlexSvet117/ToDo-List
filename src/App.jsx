// import { GoTasklist } from "react-icons/go";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([])

  const [filter, setFilter] = useState('all'); // Track the selected filter

  // funciton to add a task
  const addTask = (newTask) => {
    setTasks((prev) => [...prev,newTask])
  }

  // function to remove selected task
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !==id))
  }

  // function to check tasks as completed
  const toggleComplete = (id) => {
    setTasks((prev) => prev.map(task => 
        task.id === id ? { ...task, completed : !task.completed } : task
      )
    )
  }

  // Function to remove all completed tasks
  const clearCompleted = () => {
    setTasks((prev) => prev.filter(task => !task.completed));
  }

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (

    <div className="container justify-content-center">
      <div className="">
        <Navbar/>
        <div className="col-5 mx-auto mt-2">
          <Form addTask={addTask}/>
        </div>
        <TaskList tasks={filteredTasks} removeTask={removeTask} toggleComplete={toggleComplete}/>
        <div className="col-5 mx-auto mt-2">
        <Footer 
        clearCompleted={clearCompleted} 
        tasks={tasks} 
        setFilter={setFilter} 
        currentFilter={filter}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
