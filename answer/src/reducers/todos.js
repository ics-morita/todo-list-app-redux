const initialState = {
	tasks: [],
	loading: false,
	error: null
};
export const todos = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						id: action.id,
						label: action.label,
						completed: false
					}
				]
			};
		case 'CHANGE':
			return {
				...state,
				tasks: state.tasks.map(
					(task) =>
						task.id === action.id
							? {
									...task,
									completed: !task.completed
								}
							: task
				)
			};
		case 'DELETE':
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.id)
			};
		case 'FETCH_BEGIN':
			return {
				...state,
				loading: true
			};
		case 'FETCH_SUCCSESS':
			return {
				...state,
				loading: false,
				tasks: action.payload
			};
		case 'FETCH_FAILURE':
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
};
