import React, { useState } from "react";
import "./styles/App.css";

interface AddTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

function AddTask({ setTasks }: AddTaskProps) {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // Use e.target.value to set the string value
  };

  const handleAddTask = () => {
    setTasks((prev) => {
      const updatedTasks = [...prev, input];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to local storage
      return updatedTasks;
    });
    setInput("");
  };

  return (
    <div className="card add-task_card">
      <img src="../src/assets/Logo.png" alt="" id="Logo" />
      <input
        placeholder="add task"
        onChange={handleChange}
        value={input}
        className="add-task-input"
      ></input>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
