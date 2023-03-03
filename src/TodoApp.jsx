import React, { useState } from "react";
import {
  useGetTodosQuery,
  useGetTodoQuery,
} from "./store/slices/apis/todosApi";

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const PrevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <h4>isLoading: {isLoading ? "TRUE" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong>
            : {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={PrevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};

export default TodoApp;
