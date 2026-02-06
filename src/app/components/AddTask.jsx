import { useState } from "react";
import "../components/AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("")
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Add a Task"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

export default AddTask;
