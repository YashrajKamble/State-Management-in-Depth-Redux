import "./App.css";
import AddTask from "./app/components/addTask";
import FilterTask from "./app/components/FilterTask";
import TaskList from "./app/components/TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
