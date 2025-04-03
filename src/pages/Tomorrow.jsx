import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Tomorrow = () => {
  return (
    <>
      <TodoInput date="tomorrow" />
      <TodoList date="tomorrow" />
    </>
  );
};

export default Tomorrow;
