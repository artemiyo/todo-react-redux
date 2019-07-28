import React from "react";

const TodoItem = props => {
  const { todo, doneTodo, deleteTodo } = props;
  const { id, done, text, category } = todo;
  const styles = {
    textDecoration: done ? "line-through" : "none"
  };

  return (
    <div className="item" style={styles}>
      <div className="right floated content">
        <button
          onClick={() => doneTodo(id)}
          className="ui primary button"
          disabled={done ? true : false}
        >
          {done ? "Done" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(id)} className="ui negative button ">
          Delete
        </button>
      </div>
      <div className="content">
        <div className="ui teal label right floated">{`Category: ${category}`}</div>
        <h2 className="header">{text}</h2>
      </div>
    </div>
  );
};

export default TodoItem;
