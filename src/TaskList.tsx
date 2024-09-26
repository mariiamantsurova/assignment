interface TaskProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  setCompleted: React.Dispatch<React.SetStateAction<string[]>>;
}

function TaskList({ tasks, setTasks, setCompleted }: TaskProps) {
  const completeTask = (task: string, index: number) => {
    setTasks((prev) => {
      const updatedTasks = prev.filter(
        (task, taskIndex) => index !== taskIndex
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    setCompleted((prev) => {
      const updatedTasks = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to local storage
      return updatedTasks;
    });
  };

  return (
    <div className="card task-list_card">
      <h2>Tasks:</h2>
      <ul className="task-list">
        {tasks.map((task: string, index: number) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => completeTask(task, index)} // Toggle completed state
            />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
