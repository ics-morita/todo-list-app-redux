import React from 'react';

export const TodoItem = (props) => {
	const node =
		props.completed === true ? (
			<del className="label_complete">{props.label}</del>
		) : (
			<span className="label_normal">{props.label}</span>
		);

	return (
		<li className="todo_item">
			<button
				className={`button_onChange ${props.completed
					? 'button_onChange_completed'
					: 'button_onChange_uncomplete'}`}
				onClick={props.onChange}
			>
				変更
			</button>
			{node}
			<button className="button_onDelete" onClick={props.onDelete}>
				削除
			</button>
		</li>
	);
};
