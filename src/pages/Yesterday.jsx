import TodoInput from "../components/TodoInput";
import "../styles/todoPage.scss";
import TodoPercentage from "../components/TodoPercentage";

const Yesterday = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>🎉 어제 했던 일</h2>
      <TodoInput date="yesterday" addTodo={addTodo} />
      <TodoPercentage date="yesterday" todos={todos} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo("yesterday", todo.id)} />
            <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
            <button onClick={() => deleteTodo("yesterday", todo.id)}>삭제하기</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Yesterday;
