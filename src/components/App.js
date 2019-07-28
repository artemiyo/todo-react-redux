import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoSelectCategory from "./TodoSelectCategory";

const App = () => {
  return (
    <div style={{ paddingTop: "2rem" }} className="ui container">
      <TodoInput />
      <TodoSelectCategory />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default App;
