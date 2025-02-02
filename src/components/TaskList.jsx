import TaskCard from './Task'
import Task from './Task'

function TaskList({tasks, removeTask, toggleComplete}) {


  return (tasks.length < 1 ? (<div className='text-center mt-2'>No Tasks Added</div>) : 

    (<div className="d-flex flex-column gap-1 align-items-center">
        {tasks.map((task)=> (
          <Task key={task.id} task={task} removeTask={removeTask} toggleComplete={toggleComplete}/> 
        ))}
    </div>)


  )
}

export default TaskList
