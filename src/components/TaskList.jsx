import React, { useState } from 'react'
import TaskCard from './Task'

function TaskList() {

    const [tasks, setTasks] = useState([
        {id: 1, taskName: "Do the Dishes", completed: false},
        {id: 2, taskName: "Render your ass", completed: false},
        {id: 3, taskName: "Go for a walk", completed: false},
    ])


  return (

    
    <div>
        {tasks.map((task)=> (
          
        ))}
      
    </div>
  )
}

export default TaskList
