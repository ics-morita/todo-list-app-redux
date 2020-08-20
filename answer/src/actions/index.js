let count = 0;
export const addTodo = (label) => ({
  type: "ADD",
  id: count++,
  label: label,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  filter: filter,
});

export const toggleTodo = (id) => ({
  type: "CHANGE",
  id: id,
});
export const deleteTodo = (id) => ({
  type: "DELETE",
  id: id,
});
