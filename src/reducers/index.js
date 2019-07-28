import {
  INPUT_CHANGE,
  INPUT_CATEGORY_CHANGE,
  SELECT_CHANGE,
  ADD_TODO,
  ADD_CATEGORY,
  DELETE_TODO,
  DONE_TODO,
  TODO_FILTER
} from "../actions/types";

const initialState = {
  term: "",
  value: "",
  category: "All",
  todos: [],
  filterCategory: "All",
  categories: ["All"]
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, term: action.payload };

    case INPUT_CATEGORY_CHANGE:
      return { ...state, value: action.payload };

    case SELECT_CHANGE:
      return { ...state, category: action.payload };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            category: action.payload.category,
            done: false
          }
        ]
      };

    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1)
        ]
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )
      };

    case TODO_FILTER:
      return {
        ...state,
        filterCategory: action.payload
      };

    default:
      return state;
  }
};

export default reducers;
