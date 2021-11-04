import React from "react";

function CategoryFilter({ categories, handleButtonClick, itemCategory }) {

  let categoriesList = categories.map((value, index) => {
    let buttonClass = itemCategory === value ? "selected" : null;
    return <button key={index} value={value} className={buttonClass} onClick={handleButtonClick}>{value}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
        <ul>
          {categoriesList}
        </ul>
    </div>
  );
}

export default CategoryFilter;
