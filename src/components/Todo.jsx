import React from "react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="d-flex justify-content-center todo">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${
          task.completed ? "text-success col " : ""
        } col-6 task fs-5 `}
      >
        {task.task}
      </p>
      <div className="col-6">
        <button className="btn btn-primary" onClick={() => editTodo(task.id)}>
          <box-icon name="pencil" color="#ffffff"></box-icon>
        </button>
        <button
          className="btn btn-danger px-1"
          onClick={() => deleteTodo(task.id)}
        >
          <box-icon name="trash" color="#ffffff"></box-icon>
        </button>
      </div>
    </div>
  );
};
