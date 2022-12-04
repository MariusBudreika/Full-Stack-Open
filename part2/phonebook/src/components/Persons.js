import React from "react";
import Person from "./Person";

const Persons = ({ filteredList }) => {
  return (
    <>
      {filteredList.map((person) => (
        <Person key={person.name} data={person} />
      ))}
    </>
  );
};

export default Persons;
