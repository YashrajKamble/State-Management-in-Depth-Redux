import { useDispatch } from "react-redux";
import { deleteTasks, toggleTask } from "../../features/tasks/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={`task ${task.completed ? "completed" : ""}`}>
        <span className="text-black">{task.text}</span>
        <div>
          <button
            className="button"
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.completed ? "undo" : "Done"}
          </button>
          <button
            className="button delete"
            onClick={() => dispatch(deleteTasks(task.id))}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
export default TaskItem;
