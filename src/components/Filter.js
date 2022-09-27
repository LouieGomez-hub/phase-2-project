import React from "react";

function Filter() {
  return (
    <div className="Filter">
      <input 
        type="text"
        name="search"
        placeholder="Search..."
      />
      <select name="filter">
        <option value="All">Filter by category</option>
        <option value="Marvel">Marvel</option>
        <option value="DC">DC</option>
      </select>
    </div>
  )
}

export default Filter;