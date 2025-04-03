import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Yesterday = () => {
  return (
    <>
      <TodoInput date="yesterday" />
      <TodoList date="yesterday" />
    </>
  );
};

export default Yesterday;
