import React from 'react'
import { FaTrash } from "react-icons/fa6"
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

function Task({task,removeTask, toggleComplete}) {
  return (
    <div className="col-5">
        <div className="card bg-bone-white text-dark">
            <div className="card-body d-flex justify-content-between">
                <div className="text-dark d-flex">
                   <button className="btn btn-sm text-dark px-0 fs-4"onClick={() => toggleComplete(task.id)}>
                   {task.completed ? <FaRegCircleCheck /> : <FaRegCircle />}</button>
                   <p className={`card-title px-3 my-2 ${task.completed ? 'completed' : ''}`}>
                   {task.taskName}</p>
                </div>
                <button onClick={() => removeTask(task.id)} className="btn btn-sm fs-5"><FaTrash/></button>
            </div>
            
        </div>
    </div>
  )
}

export default Task
