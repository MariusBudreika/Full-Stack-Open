import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: number,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
    }
  };

  const filteredList = persons.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} searchTextHandler={searchTextHandler} />
      <h3>add a new</h3>
      <PersonForm
        addName={addName}
        nameChangeHandler={nameChangeHandler}
        numberChangeHandler={numberChangeHandler}
      />
      <h3>Numbers</h3>
      <Persons filteredList={filteredList} />
    </div>
  );
};

export default App;
