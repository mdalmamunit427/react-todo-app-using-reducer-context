import React, { useState } from 'react'
import { useTasksDispatch } from '../contexts/TasksContext';
import { IoClose } from "react-icons/io5";

const SingleTask = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value
                }
              });
            }} 
            className='shadow appearance-none border rounded p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          <button onClick={() => setIsEditing(false)} className='bg-blue-500 px-6 py-[2.5px]'>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          <span className={`text-left ${task.done ? "line-through" : ""}`}>{task.text}</span>
          <button onClick={() => setIsEditing(true)} className='border hover:bg-blue-700 text-sm py-[2.5px] text-white font-medium px-6 rounded focus:outline-none focus:shadow-outline'>
            Edit
          </button>
        </>
      );
    }
  return (
    <label className='space-x-5 flex items-center'>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
        className='size-4'
      />
      {taskContent}
      <button 
      className='bg-red-500 hover:bg-blue-700 text-white font-semibold p-1 rounded focus:outline-none focus:shadow-outline'
      onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        <IoClose />
      </button>
    </label>
  )
}

export default SingleTask