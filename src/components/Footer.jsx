import React from 'react'

function Footer({clearCompleted, tasks, setFilter, currentFilter}) {

    const tasksLeft = tasks.filter(task => !task.completed).length

    const handleFilterChange = (filter) => {
        setFilter(filter);
      };

      
  return (
    <div className='footer d-flex justify-content-between p-1 bg-bone-white shadow-sm'>
        <div className="p-2 text-color">{tasksLeft} Tasks left</div>
        <div className='d-flex'>
            <button className={` btn btn-sm fs-6 text-color ${currentFilter === 'all' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('all')}>All</button>
            <button className={` btn btn-sm fs-6 text-color ${currentFilter === 'active' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('active')}>Active</button>
            <button className={` btn btn-sm fs-6 text-color ${currentFilter === 'completed' ? 'font-weight-bold' : ''}`}
          onClick={() => handleFilterChange('completed')}>Completed</button>
        </div>
        <button onClick={clearCompleted} className="btn btn-sm fs-6 text-color">Clear Completed</button>
      
    </div>
  )
}

export default Footer
