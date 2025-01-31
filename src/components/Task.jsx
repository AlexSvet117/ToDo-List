import React from 'react'
import { FaTrash } from "react-icons/fa6"
import { CiCircleCheck } from "react-icons/ci";

function Task() {
  return (
    <div className="col-6">
        <div className="card bg-bone-white text-dark">
            <div className="card-body d-flex justify-content-between">
                <div className="text-dark d-flex">
                   <div className="text-dark px-2"><CiCircleCheck /></div>
                   <p className="card-title m-0">New Task</p>
                </div>
                <div className="text-dark"><FaTrash/></div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Task
