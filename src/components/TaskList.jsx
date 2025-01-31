import React, { useState } from 'react'
import TaskCard from './Task'
import Task from './Task'

function TaskList() {

    const [tasks, setTasks] = useState([
        {id: 1, taskName: "Do the Dishes", completed: false},
        {id: 2, taskName: "Render your ass", completed: false},
        {id: 3, taskName: "Go for a walk", completed: false},
    ])


  return (

    
    <div className="d-flex flex-column gap-1 align-items-center">
        {tasks.map((task)=> (
          <Task key={task.id} task={task}/> 
        ))}

      
    </div>
  )
}

export default TaskList
