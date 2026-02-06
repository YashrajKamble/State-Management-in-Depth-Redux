import "./App.css";
import AddTask from "./app/components/addTask";
import TaskList from "./app/components/TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList/>
    </div>
  );
}

export default App;
