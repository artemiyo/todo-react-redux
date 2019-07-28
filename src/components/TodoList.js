import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { deleteTodo, doneTodo } from "../actions";

class TodoList extends Component {
  deleteTodo = id => {
    const idx = this.props.todos.findIndex(todo => todo.id === id);

    this.props.deleteTodo(idx);
  };

  filteredTodos = filter => {
    const { filterCategory, todos } = this.props;

    if (filterCategory !== "All") {
      return [...todos.filter(todo => todo.category === filter)];
    }

    return todos;
  };

  render() {
    const { doneTodo, filterCategory } = this.props;

    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.filteredTodos(filterCategory).map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.deleteTodo}
              doneTodo={doneTodo}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ todos, filterCategory }) => {
  return {
    todos,
    filterCategory
  };
};

export default connect(
  mapStateToProps,
  { deleteTodo, doneTodo }
)(TodoList);
