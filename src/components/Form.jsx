import React from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Form() {
  return (
    <form className="border border-1 p-2 px-3 mb-1 bg-bone-white">
        <div className="form-floating d-flex flex-row justify-content-between">
            <div className="d-flex">
                <div className="text-dark px-1 mt-1"><FaRegCircle/></div>
                <input type="text" className="form-control border-0 bg-bone-white" id="new-task" placeholder="Add New Task ..." />
            </div>
            <div className="text-dark mt-1"><FaPlus /></div>

        </div>
    </form>
  )
}

export default Form
