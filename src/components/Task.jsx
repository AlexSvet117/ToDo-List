import React from 'react'
import { FaTrash } from "react-icons/fa6"
import { FaRegCircleCheck } from "react-icons/fa6";

function Task({task}) {
  return (
    <div className="col-5">
        <div className="card bg-bone-white text-dark">
            <div className="card-body d-flex justify-content-between">
                <div className="text-dark d-flex">
                   <div className="text-dark px-0 fs-4"><FaRegCircleCheck/></div>
                   <p className="card-title px-3 my-2">{task.taskName}</p>
                </div>
                <div className="text-dark fs-5"><FaTrash/></div>
            </div>
            
        </div>
    </div>
  )
}

export default Task
