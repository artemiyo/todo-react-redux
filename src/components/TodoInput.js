import React, { Component } from "react";
import { connect } from "react-redux";

import { inputChange, addTodo } from "../actions";

class TodoInput extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { todos, term, addTodo, category } = this.props;

    if (term.trim() === "") return;

    return [...todos, addTodo(term, category)];
  };

  render() {
    const { term, inputChange } = this.props;

    return (
      <form onSubmit={e => this.onSubmit(e)} className="ui fluid action input">
        <input
          onChange={e => inputChange(e.target.value)}
          value={term}
          type="text"
          placeholder="Add todos..."
        />
        <button className="ui button">Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = ({ term, todos, category }) => {
  return {
    term,
    todos,
    category
  };
};

export default connect(
  mapStateToProps,
  { inputChange, addTodo }
)(TodoInput);
