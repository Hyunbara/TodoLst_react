import Yesterday from "./pages/Yesterday";
import Today from "./pages/Today";
import Tomorrow from "./pages/Tomorrow";
import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>📝 Todo List</h1>

      <nav>
        <NavLink to="/yesterday">어제</NavLink>
        <NavLink to="/today">오늘</NavLink>
        <NavLink to="/tomorrow">내일</NavLink>
      </nav>

      <Routes>
        <Route path="/yesterday" element={<Yesterday />} />
        <Route path="/today" element={<Today />} />
        <Route path="tomorrow" element={<Tomorrow />} />
      </Routes>
    </div>
  );
}

export default App;
