const TaskItem = ({ task }) => {
  return (
    <>
      <li>{task.text}</li>
      <div>
        <button className="button">Done</button>
        <button className="button delete">Delete</button>
      </div>
    </>
  );
};
export default TaskItem;
