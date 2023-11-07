import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  setFilter,
  selectVisibleTodos,
} from "./store";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <FilterTodo />
      <TodoList />
    </div>
  );
}

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

const TodoList = () => {
  const activeFilter = useSelector((state) => state.filter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

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
