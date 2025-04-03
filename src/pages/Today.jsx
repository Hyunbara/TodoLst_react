import TodoInput from "../components/TodoInput";

const Today = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>🎰 오늘의 할일</h2>
      <TodoInput date="today" addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo("today", todo.id)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => deleteTodo("today", todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Today;
