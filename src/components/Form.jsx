import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Form({addTask}) {

  const [taskInput, setTaskInput] = useState('')

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent adding empty tasks
    if (taskInput.trim() === '') {
        return; // Don't submit if the input is empty
      }

  const newTask = {
    id: Date.now(),
    taskName: taskInput,
    completed: false
  }

  addTask(newTask)

  setTaskInput('')
  }

  return (
    <form onSubmit={handleSubmit}
    className="border border-1 p-2 px-3 mb-1 bg-bone-white shadow-sm">
        <div className="form-floating d-flex flex-row justify-content-between">
            <div className="d-flex">
                <div className="mb-1 fs-4 icon-color"><FaRegCircle/></div>
                <input onChange={handleTaskInput}
                type="text" className="form-control border-0 bg-bone-white px-3 col-auto" id="new-task" placeholder="Add New Task ..." 
                value={taskInput}/>
            </div>
            
            <button type="submit" className="btn fs-4 btn-sm icon-color"><FaPlus /></button>
        </div>
    </form>
  )
}

export default Form
