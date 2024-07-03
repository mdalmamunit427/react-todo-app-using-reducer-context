import React from 'react'
import { useTasks } from '../contexts/TasksContext';
import SingleTask from './SingleTask';

const TaskList = () => {
    const tasks = useTasks();
  return (
    <div className=''>
<ul className='space-y-3 text-lg mt-5'>
    {tasks.map(task => (
      <li key={task.id} className=''>
        <SingleTask task={task} />
      </li>
    ))}
  </ul>
    </div>
    
  )
}

export default TaskList