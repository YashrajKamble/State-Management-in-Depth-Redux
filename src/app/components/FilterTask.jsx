import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../features/tasks/taskSlice";

const FilterTask = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.task.filters);

  console.log(filter);

  return (
    <>
      <div className="filter">
        <button
          onClick={() => dispatch(setFilters("all"))}
          className={`button ${filter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilters("completed"))}
          className={`button ${filter === "completed" ? "active" : ""}`}
        >
          Completed
        </button>
      </div>
    </>
  );
};
export default FilterTask;
