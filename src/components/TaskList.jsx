import TaskCard from './Task'
import Task from './Task'

function TaskList({tasks, fetchTasks, toggleComplete}) {


  return (
    
    tasks.length < 1 ? (<div className='bg-bone-white text-center mt-2 p-2 mx-auto col-5 border-bottom text-color'>No Tasks Added</div>) : 

    (<div className="d-flex flex-column align-items-center">
        {tasks.map((task)=> (
          <Task key={task.id} task={task} fetchTasks={fetchTasks} toggleComplete={toggleComplete}/> 
        ))}
    </div>)


  )
}

export default TaskList
