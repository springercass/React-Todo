import React from "react";
import "./Todo.css";
import { catchClause } from "@babel/types";
import { createECDH } from "crypto";

const Todo = props => {
  return (
    <div
      onClick={() => props.handleToggleComplete(props.task.id)}
      className={`${props.task.completed}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
