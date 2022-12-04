import React from "react";

const PersonForm = ({ addName, nameChangeHandler, numberChangeHandler }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input onChange={nameChangeHandler} />
      </div>
      <div>
        number: <input onChange={numberChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
