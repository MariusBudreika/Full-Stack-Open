import React from "react";

const Part = ({ part }) => {
  return (
    <li style={{ margin: "10px 0" }}>
      {part.name} {part.exercises}
    </li>
  );
};

export default Part;
