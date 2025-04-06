import { useState } from "react";

const TodoInput = ({ date, addTodo }) => {
  const [text, setText] = useState("");

  // input 탭에서 엔터 시 또는 버튼을 눌렀을 때 동작하는 함수 (할 일 추가 함수)
  const handleAdd = () => {
    // 만약 값이 없으면 함수 종료
    if (!text.trim()) return;

    addTodo(date, text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="할 일을 입력하세요."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button onClick={handleAdd}>추가하기</button>
    </div>
  );
};

export default TodoInput;
