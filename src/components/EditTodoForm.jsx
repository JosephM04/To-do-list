import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // preventing to reload the page when submit
    e.preventDefault();
    // using task.id to change the value of the task
    editTodo(value, task.id);
  };
  return (
    // form and buttons to update the task
    <form onSubmit={handleSubmit} className="form-group row d-flex justify-content-center mb-3">
      <input
        type="text"
        value={value}
        className="form-control form-control-lg col"
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-success col-3">
      <box-icon name='check' color='#ffffff' ></box-icon>
      </button>
    </form>
  );
};
