import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
