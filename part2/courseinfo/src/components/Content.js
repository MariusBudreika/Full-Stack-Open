import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
    </>
  );
};

export default Content;
