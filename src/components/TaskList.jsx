import TaskCard from './Task'
import Task from './Task'

function TaskList({tasks}) {


  return (

    <div className="d-flex flex-column gap-1 align-items-center">
        {tasks.map((task)=> (
          <Task key={task.id} task={task}/> 
        ))}
    </div>


  )
}

export default TaskList
