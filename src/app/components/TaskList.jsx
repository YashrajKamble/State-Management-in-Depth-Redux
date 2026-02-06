import { useSelector } from "react-redux";
import TaskItem from "./TaskItems";

const TaskList = () => {
  const { items, filters } = useSelector((state) => state.task);

  const filtered =
    filters === "completed" ? items.filter((task) => task.completed) : items;
  console.log(items, "items");

  return (
    <ul className="task-list">
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
