import React from 'react'

function Footer() {
  return (
    <div className='footer card d-flex flex-row justify-content-between p-2 bg-bone-white'>
        <div># tasks left</div>
        <div className='d-flex flex-row'>
            <div className='mx-1'>all</div>
            <div className='mx-1'>active</div>
            <div className='mx-1'>completed</div>
        </div>
        <div>Clear Completed</div>
      
    </div>
  )
}

export default Footer
