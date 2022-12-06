import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
