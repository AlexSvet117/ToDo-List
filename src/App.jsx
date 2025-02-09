import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect, useState } from 'react'
import { FaRegSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";



function App() {

  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // const USER_ID = import.meta.env.VITE_USER_ID
  const USER_ID = 23

  // get data from api and render on screen
  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/todos?user_id=' + USER_ID)
      const data = await response.json()
      console.log(data)
      setTasks(data)
    } catch (err) {
      console.log(err)
    }
    useEffect(() => {
      fetchTasks()
    }, [])
  }  

  const toggleComplete = async (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  
    const updatedTask = tasks.find((task) => task.id === id);
    const updatedStatus = !updatedTask.completed;
  
    try {
      const response = await fetch(`/api/todos/${id}?user_id=${USER_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: updatedStatus }),
      });
  
      if (!response.ok) {
        throw new Error(`Error updating the task with ID: ${id}`)
      }
  
      fetchTasks()
    } catch (err) {
      console.log('Error updating task:', err)
  
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !updatedStatus } : task
        )
      );
    }
  };

  const clearCompleted = async () => {
    const completedTasks = tasks.filter(task => task.completed)
  
    if (completedTasks.length === 0) {
      console.log("No tasks to delete.");
      return;
    }
  
    try {
      // Loop through each completed task and delete it
      await Promise.all(
        completedTasks.map(async (task) => {
          const response = await fetch(`/api/todos/${task.id}?user_id=${USER_ID}`, {
            method: 'DELETE',
          });
  
          if (!response.ok) {
            throw new Error(`Error deleting the task with ID: ${task.id}`)
          }
        })
      );
  
      fetchTasks(); 
      console.log('Completed tasks deleted successfully')
      setTasks((prev) => prev.filter(task => !task.completed))
      
    } catch (err) {
      console.error('Error deleting tasks:', err);
    }
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  // s dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`split-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="container justify-content-center">
      <button 
        className={`btn btn-${isDarkMode ? 'light' : 'dark'} mt-3 icon-color`} 
        onClick={toggleDarkMode}>
        {isDarkMode ? <FaRegSun /> : <IoMoon />}
      </button>
      <div className="">
        <Navbar/>
        <div className="col-5 mx-auto mt-2">
          <Form fetchTasks={fetchTasks}/>
        </div>
        <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} toggleComplete={toggleComplete}/>
        <div className="col-5 mx-auto">
        <Footer 
        clearCompleted={clearCompleted} 
        tasks={tasks} 
        setFilter={setFilter} 
        currentFilter={filter}
        />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
