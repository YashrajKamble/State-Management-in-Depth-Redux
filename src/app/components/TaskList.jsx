import { useSelector } from "react-redux";

const TaskList = () => {
  const { items, filters } = useSelector((state) => state.task);
  console.log(items, "items");

  return <ul></ul>;
};

export default TaskList;
