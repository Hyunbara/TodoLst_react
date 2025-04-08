//date로 받고, 전체 중에 complete 비율을 보여주는 컴포넌트

import { useMemo } from "react";

// TodoPercentage 컴포넌트의 리턴값의 코드가 복잡해져서 따로 뺐음.
const TodoDate = ({ date, percentage }) => {
  const todoDate = date == "today" ? "오늘" : date == "yesterday" ? "어제" : date == "tomorrow" ? "내일" : "";

  return (
    <div>
      {todoDate}의 달성률은 {percentage}%입니다.
    </div>
  );
};

const TodoPercentage = ({ date, todos }) => {
  const percentage = useMemo(() => {
    if (todos.length === 0) return 0;

    const completeCount = todos.filter((todo) => todo.completed).length;

    return Math.round((completeCount / todos.length) * 100);
  }, [todos]);

  return (
    <div>
      <TodoDate date={date} percentage={percentage} />
    </div>
  );
};

export default TodoPercentage;
