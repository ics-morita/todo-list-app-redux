import React from 'react';
import { TodoList } from './containers/TodoListContainer';
import { AddTodo } from './containers/AddTodoContainer';
import { Footer } from './components/Footer';

export const App = () => {
	return (
		<div className="app">
			<h1 className="app_title">TODO List App</h1>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
	);
};
