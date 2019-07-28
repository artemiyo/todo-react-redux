import React from "react";
import { connect } from "react-redux";
import { selectChange } from "../actions";
import TodoAddCategory from "./TodoAddCategory";

const TodoSelectCategory = props => {
  const { categories, category, selectChange } = props;
  return (
    <div className="ui grid">
      <div className="six column row">
        <div className="left floated column">
          <TodoAddCategory />
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="right floated column"
        >
          <label style={{ marginRight: "1rem" }}>Category</label>
          <select
            onChange={e => selectChange(e.target.value)}
            value={category}
            className="ui fluid dropdown"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ category, categories }) => {
  return {
    category,
    categories
  };
};

export default connect(
  mapStateToProps,
  { selectChange }
)(TodoSelectCategory);
