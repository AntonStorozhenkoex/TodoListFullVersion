import { Header } from "./components/todoList/Header";
import { TodoList } from "./components/todoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleTodos } from "./redux/filter";
import { fetchTodos } from "./redux/todos/action";
import "./index.css";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.visibilityFilter);
  const todos = useSelector((state) => state.todos);

  const visibleTodos = getVisibleTodos(todos, filter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="App myApp">
      <Header />
      <TodoList filter={filter} todos={todos} visibleTodos={visibleTodos} />
    </div>
  );
};
