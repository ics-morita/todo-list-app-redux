import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';
import { TodoListComponent } from '../components/TodoListComponent';

export const TodoList = (props) => {
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
    }
  };

  const getStatusTodos = (filter) => {
    switch (filter) {
      case 'all':
        return '';
      case 'active':
        return 'アクティブな';
      case 'completed':
        return '完了した';
    }
  };

  const useStateProps = () => {
    const { todos, filters } = useSelector((state) => state);
    return { todos: getVisibleTodos(todos, filters), 
      status: getStatusTodos(filters)
    };
  };

  const useDispatchProps = () => {
    const dispatch = useDispatch();
    const handleToggleTodo = useCallback(
      (payload) => {
        dispatch(toggleTodo(payload));
      },
      [ dispatch ]
    );
    const handleDeleteTodo = useCallback(
      (payload) => {
        dispatch(deleteTodo(payload));
      },
      [ dispatch ]
    );
    return { handleToggleTodo, handleDeleteTodo }
  };
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };

  return <TodoListComponent {..._props} />

};
