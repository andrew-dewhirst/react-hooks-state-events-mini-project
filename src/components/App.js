import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [itemCategory, setItemCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS)

  function handleButtonClick(event) {
    setItemCategory(event.target.value)
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  };

  let itemsToDisplay = tasks.filter((item) => {
    if (itemCategory === "All") {
      return true;
    } else {
      return item.category === itemCategory;
    }
  });

  function handleUpdatedList(text) {
    setTasks(itemsToDisplay.filter(task => task.text !== text));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleButtonClick={handleButtonClick} itemCategory={itemCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList itemsToDisplay={itemsToDisplay} handleUpdatedList={handleUpdatedList} />
    </div>
  );
}

export default App;
