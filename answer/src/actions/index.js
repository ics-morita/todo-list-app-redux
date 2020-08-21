import axios from "axios";

let count = 0;
const API_URL = "http://localhost:5000/tasks";

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

export const fetchBigin = () => ({
  type: "FETCH_BIGIN"
});

export const fetchSuccess = (payload) => ({
  type: "FETCH_SUCCSESS",
  payload,
})

export const fetchFailure = (error) => ({
  type: "FETCH_FAILURE",
  error,
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchBigin());
    const response = await axios.get(API_URL).catch(error => {
      dispatch(fetchFailure(error))
    });
    await dispatch(fetchSuccess(response.data))
  }
}

