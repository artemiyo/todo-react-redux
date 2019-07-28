import {
  INPUT_CHANGE,
  INPUT_CATEGORY_CHANGE,
  SELECT_CHANGE,
  ADD_TODO,
  ADD_CATEGORY,
  DONE_TODO,
  DELETE_TODO,
  TODO_FILTER
} from "./types";
let todoId = 0;

export const inputChange = term => dispatch => {
  dispatch({
    type: INPUT_CHANGE,
    payload: term
  });
};

export const inputCategoryChange = value => dispatch => {
  dispatch({
    type: INPUT_CATEGORY_CHANGE,
    payload: value
  });
};

export const selectChange = category => dispatch => {
  dispatch({
    type: SELECT_CHANGE,
    payload: category
  });
};

export const addCategory = value => dispatch => {
  dispatch({
    type: ADD_CATEGORY,
    payload: value
  });
};

export const addTodo = (text, category) => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: { id: todoId++, text, category }
  });
};

export const deleteTodo = id => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};

export const doneTodo = id => dispatch => {
  dispatch({
    type: DONE_TODO,
    payload: id
  });
};

export const filterTodo = filter => dispatch => {
  dispatch({
    type: TODO_FILTER,
    payload: filter
  });
};
