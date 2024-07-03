import React, { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";
import { FaRegEdit } from "react-icons/fa";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  let nextId = 3;
  return (
    <div className="flex  gap-4">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        <FaRegEdit/>
      </button>
    </div>
  );
};

export default AddTask;
