import Yesterday from "./pages/Yesterday";
import Today from "./pages/Today";
import Tomorrow from "./pages/Tomorrow";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState({
    yesterday: [
      { id: 1, text: "리액트 공부하기", completed: true },
      { id: 2, text: "위클리페이퍼 정리하기", completed: false },
    ],
    today: [
      { id: 3, text: "기술 블로그 작성하기", completed: true },
      { id: 4, text: "팀미팅 참여하기", completed: false },
    ],
    tomorrow: [
      { id: 5, text: "위워크 가서 공부하기", completed: false },
      { id: 6, text: "런닝하기", completed: true },
    ],
  });

  // 추가
  // date 파라미터를 받아서, [today/yest/tomor] 배열에 넣기 위함!
  const addTodo = (date, text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => ({
      ...prev,
      //새 할일(newTodo)로 상태 업데이트!
      [date]: [...prev[date], newTodo],
    }));
  };

  const toggleTodo = (date, id) => {
    setTodos((prev) => ({
      ...prev,
      [date]: prev[date].map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  const deleteTodo = (date, id) => {
    setTodos((prev) => ({
      ...prev,
      [date]: prev[date].filter((todo) => todo.id !== id),
    }));
  };

  return (
    <BrowserRouter>
      <div>
        <h1>📝 Todo List</h1>

        <nav>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/yesterday">어제</NavLink>
          <NavLink to="/today">오늘</NavLink>
          <NavLink to="/tomorrow">내일</NavLink>
        </nav>

        <Routes>
          <Route
            path="/yesterday"
            element={<Yesterday todos={todos.yesterday} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />}
          />
          <Route path="/today" element={<Today todos={todos.today} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />} />
          <Route path="tomorrow" element={<Tomorrow todos={todos.tomorrow} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
