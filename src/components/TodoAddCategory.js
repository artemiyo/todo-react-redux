import React, { Component } from "react";
import { connect } from "react-redux";
import { inputCategoryChange, addCategory } from "../actions";

class TodoAddCategory extends Component {
  onCategorySubmit = e => {
    e.preventDefault();
    const { categories, addCategory, value } = this.props;

    if (value.trim() === "") return;

    return [...categories, addCategory(value)];
  };

  render() {
    const { value, inputCategoryChange } = this.props;

    return (
      <form
        onSubmit={e => this.onCategorySubmit(e)}
        style={{ margin: "2rem 0" }}
        className="ui action input"
      >
        <input
          value={value}
          onChange={e => inputCategoryChange(e.target.value)}
          type="text"
          placeholder="Add category..."
        />
        <button className="ui button">Add</button>
      </form>
    );
  }
}

const mapStateToProps = ({ categories, value }) => {
  return {
    categories,
    value
  };
};

export default connect(
  mapStateToProps,
  { inputCategoryChange, addCategory }
)(TodoAddCategory);
