import React, { useState } from "react";
import Movie from "./FetchMovie";

const Filter = () => {
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <div className=" add filter-container">
        <select id="filter" onChange={handleFilterChange}>
          <option value="ALL">ALL</option>
          <option value="rate">Rate</option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>
      <Movie filter={filter} />
    </>
  );
};

export default Filter;
