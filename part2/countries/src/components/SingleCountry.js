import { useState, useEffect } from "react";
import axios from "axios";

const SingleCountry = ({ countryInfo }) => {
  const [weatherData, setweatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api_key = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryInfo[0].capital}&appid=${api_key}&units=metric
  `;

  useEffect(() => {
    axios.get(url).then((response) => {
      setweatherData(response.data);
      setIsLoading(false);
    });
  }, [url]);

  return (
    <div>
      <h1>{countryInfo[0].name.common}</h1>
      <p>{countryInfo[0].capital}</p>
      <p>area {countryInfo[0].area}</p>
      <h2>languages:</h2>
      <div style={{ marginLeft: "1rem" }}>
        {Object.keys(countryInfo[0].languages).map((key, index) => {
          return <li key={index}>{countryInfo[0].languages[key]}</li>;
        })}
      </div>
      {!isLoading && (
        <div>
          <img
            style={{ marginTop: "1rem" }}
            src={countryInfo[0].flags?.png}
            alt="flag"
          ></img>
          <h2>Weather in {weatherData?.name}</h2>
          <p>temperature {weatherData?.main?.temp} Celcius</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
            alt="weatehr icon"
          ></img>
          <p>wind {weatherData?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
