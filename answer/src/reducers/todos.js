export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          completed: false,
        },
      ];
    case "CHANGE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
