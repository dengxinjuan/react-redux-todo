import React, { useState } from "react";

function NewTodoForm({ add }) {
  const [task, setTask] = useState(""); // set the task, which is the only a text value

  function handleChange(evt) {
    setTask(evt.target.value);
  } //handle change form

  function handleSubmit(evt) {
    evt.preventDefault();
    add(task);
    setTask("");
  } //handle submit, and call add function

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input name="task" type="text" onChange={handleChange} value={task} />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
