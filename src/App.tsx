import { useAuth, useLoginWithRedirect } from "@frontegg/react";
//Components
import Profile from "./Profile";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Stats from "./Stats";
//Styles
import "./styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    const storedCompletedTasks = localStorage.getItem("tasks-completed");
    if (storedCompletedTasks) {
      setTasks(JSON.parse(storedCompletedTasks));
    }
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="grid_container">
          <Profile />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            setCompleted={setCompletedTasks}
          />
          <AddTask setTasks={setTasks} />
          <Stats completed={completedTasks.length} uncompleted={tasks.length} />
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
