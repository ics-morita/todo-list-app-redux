import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoListComponent = ({ tasks, status, handleToggleTodo, handleDeleteTodo }) => {
  if(tasks.length > 0 ) {
    return (
      <ul className="todo">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          {...task}
          onChange={() => handleToggleTodo(task.id)}
          onDelete={() => handleDeleteTodo(task.id)}
        />
      ))}
    </ul>  
    )
  }
return <div className="todo_none">{status}タスクリストはありません。</div>;
};
