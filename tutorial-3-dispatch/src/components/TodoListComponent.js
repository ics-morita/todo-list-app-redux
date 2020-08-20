import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoListComponent = ({ todos, status, handleToggleTodo, handleDeleteTodo }) => {
  console.log(todos, status, handleToggleTodo, handleDeleteTodo)
  if(todos.length > 0 ) {
    return (
      <ul className="todo">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onChange={() => handleToggleTodo(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)}
        />
      ))}
    </ul>  
    )
  }
return <div className="todo_none">{status}タスクリストはありません。</div>;
};
