import React, { Component } from "react";
import { connect } from "react-redux";
import { filterTodo } from "../actions";

class TodoFilter extends Component {
  render() {
    const { categories, filterTodo, filterCategory } = this.props;
    return (
      <div className="ui tabular menu">
        {categories.map(category => (
          <button
            style={{ cursor: "pointer", outline: "none" }}
            onClick={() => filterTodo(category)}
            key={category}
            className={filterCategory === category ? "item active" : "item"}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ categories, filterCategory }) => {
  return {
    categories,
    filterCategory
  };
};

export default connect(
  mapStateToProps,
  { filterTodo }
)(TodoFilter);
