import { useEffect, useState } from "react";
import axios from "axios";
import SingleCountry from "./components/SingleCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const filteredList = countries.filter(({ name }) =>
    name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ margin: "1rem" }}>
      <label style={{ margin: "0 1rem 0 0" }}>countries</label>
      <input
        type="text"
        value={searchText}
        onChange={searchTextHandler}
      ></input>
      {filteredList.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      <ul>
        {filteredList.length <= 10 &&
          filteredList.length > 1 &&
          filteredList.map((country) => (
            <li key={country.name.common} style={{ listStyleType: "none" }}>
              {country.name.common}
            </li>
          ))}
      </ul>
      {filteredList.length === 1 && <SingleCountry data={filteredList} />}
    </div>
  );
};

export default App;
