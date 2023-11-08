import React, { useState } from "react";

// to do form component
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if has value add it to "value" and clean the form
    if(value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    // The form where you write the task to do
    <form className=" form-group row py-2 my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="form-control form-control-lg"
        onChange={(e) => setValue(e.target.value)}
        placeholder="What is the task today?"
      />
      {/* button to add the task */}
      <button type="submit" className="btn btn-success mt-1">
       <box-icon name='add-to-queue' color='#ffffff' ></box-icon>
      </button>
    </form>
  );
};
