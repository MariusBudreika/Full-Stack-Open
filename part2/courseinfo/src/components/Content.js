import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

export default Content;
