import React from "react";
import Task from "./Task";

function TaskList({ itemsToDisplay, handleUpdatedList }) {

  function handleRemoveItem(text) {
    handleUpdatedList(text)
  }

  return (
    <div className="tasks">
      {itemsToDisplay.map((task, index) => (
          <Task key={index} text={task.text} category={task.category} handleRemoveItem={handleRemoveItem} />
        ))}
    </div>
  );
}

export default TaskList;
