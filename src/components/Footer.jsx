import React from 'react'

function Footer({clearCompleted, tasks, setFilter, currentFilter}) {

    const tasksLeft = tasks.filter(task => !task.completed).length

    const handleFilterChange = (filter) => {
        setFilter(filter);
      };

  return (
    <div className='footer d-flex flex-row justify-content-between p-1 bg-bone-white'>
        <div className="p-1">{tasksLeft} Tasks left</div>
        <div className='d-flex'>
            <button className={` btn btn-sm fs-6 ${currentFilter === 'all' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('all')}>All</button>
            <button className={` btn btn-sm fs-6 ${currentFilter === 'active' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('active')}>Active</button>
            <button className={` btn btn-sm fs-6 ${currentFilter === 'completed' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('completed')}>Completed</button>
        </div>
        <button onClick={clearCompleted} className="btn btn-sm fs-6">Clear Completed</button>
      
    </div>
  )
}

export default Footer
