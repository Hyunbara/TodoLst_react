import TodoInput from "../components/TodoInput";

const Yesterday = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>🎉 어제 했던 일</h2>
      <TodoInput date="yesterday" addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo("yesterday", todo.id)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => deleteTodo("yesterday", todo.id)}>삭제하기</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Yesterday;
