import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';
import { TodoListComponent } from '../components/TodoListComponent';

export const TodoList = (props) => {
  /**
   * TODOリストの可視状態を制御します。
   * @param {[{ id: string, label: string, completed: boolean}]} todos - TODOリスト
   * @param {string} filter - フィルターの状態
   */
  const getVisibleTodos = (tasks, filter) => {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter((t) => !t.completed);
      case 'completed':
        return tasks.filter((t) => t.completed);
    }
  };
  /**
   * フィルターに応じて、メッセージを変更して返します。
   * @param {string} filter - フィルターの状態
   */
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
    return { tasks: getVisibleTodos(todos.tasks, filters), 
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
