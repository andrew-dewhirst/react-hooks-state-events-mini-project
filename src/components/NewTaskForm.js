import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code");

  function handleTaskDetailsChange(event) {
    setTaskDetails(event.target.value);
  }

  function handleTaskCategoryChange(event) {
    setTaskCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text: taskDetails,
      category: taskCategory,
    });
    setTaskDetails(""); 
    setTaskCategory("Code");
  }

  let filteredButtonArray = categories.filter(category => category !== "All")
   
  let categoryButtons = filteredButtonArray.map(category => {
    return (
      <option key={uuid()} value={category}>{category}</option>
    )
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={taskDetails}
          onChange={handleTaskDetailsChange}
        />
      </label>
      <label>
        Category
        <select value={taskCategory} name="category" onChange={handleTaskCategoryChange}>
          {categoryButtons}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


