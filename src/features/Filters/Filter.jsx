import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./filterSlice";
const FilterTodo = () => {
    const activeFilter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const handleFilterChange = (filter) => {
      dispatch(setFilter(filter));
    };
    return (
      <div>
        <button onClick={() => handleFilterChange("all")}>all</button>
        <button onClick={() => handleFilterChange("active")}>active</button>
        <button onClick={() => handleFilterChange("completed")}>completed</button>
      </div>
    );
  };
export default FilterTodo;