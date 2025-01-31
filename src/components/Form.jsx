import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Form() {

  const [taskInput, setTaskInput] = useState('')

  const handleTaskInput = (e) => {

  }

  return (
    <form className="border border-1 p-2 px-3 mb-1 bg-bone-white">
        <div className="form-floating d-flex flex-row justify-content-between">
            <div className="d-flex">
                <div className="text-dark mb-1 fs-4"><FaRegCircle/></div>
                <input onChange={handleTaskInput}
                type="text" className="form-control border-0 bg-bone-white px-3" id="new-task" placeholder="Add New Task ..." />
            </div>
            <div className="text-dark fs-4"><FaPlus /></div>

        </div>
    </form>
  )
}

export default Form
