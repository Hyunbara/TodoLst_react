import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Today = () => {
  return (
    <>
      <h2>🎰 오늘의 할일</h2>
      <TodoInput date="today" />
      <TodoList date="today" />
    </>
  );
};

export default Today;
