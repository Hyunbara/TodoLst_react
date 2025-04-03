import TodoInput from "../components/TodoInput";

const Tomorrow = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>🥰 내일 할 일</h2>
      <TodoInput date="tomorrow" addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo("tomorrow", todo.id)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
            <button
              onClick={() => {
                deleteTodo("tomorrow", todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tomorrow;
