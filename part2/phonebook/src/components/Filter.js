import React from "react";

const Filter = ({ searchText, searchTextHandler }) => {
  return (
    <div>
      <label>filter shown with: </label>
      <input
        type="text"
        value={searchText}
        onChange={searchTextHandler}
      ></input>
    </div>
  );
};

export default Filter;
