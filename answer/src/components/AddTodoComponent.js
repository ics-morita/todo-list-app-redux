import React from "react";

export const AddTodoComponent = ({ handleAddTodo }) => {
	let inputElement;
	return (
		<div className="form">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!inputElement.value.trim()) {
						return;
					}
					handleAddTodo(inputElement.value);
					inputElement.value = '';
				}}
			>
				<input className="form_input" ref={(node) => (inputElement = node)} />
				<button className="button_add" type="submit">
					追加
				</button>
			</form>
		</div>
	);
};