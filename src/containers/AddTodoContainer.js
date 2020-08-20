import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import { AddTodoComponent } from '../components/AddTodoComponent';

export const AddTodo = (props) => {
	const useDispatchProps = () => {
		const dispatch = useDispatch();
		const handleAddTodo = useCallback(
		  (payload) => {
			dispatch(addTodo(payload));
		  },
		  [ dispatch ]
		);
		return { handleAddTodo }
	};

	const _props = { ...useDispatchProps(), ...props };
	return <AddTodoComponent {..._props} />
};

