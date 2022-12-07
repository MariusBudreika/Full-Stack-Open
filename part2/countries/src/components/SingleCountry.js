import React from "react";

const SingleCountry = ({ data }) => {
  return (
    <div>
      <h1>{data[0].name.common}</h1>
      <p>{data[0].capital}</p>
      <p>area {data[0].area}</p>
      <h2>languages:</h2>
      <div style={{ marginLeft: "1rem" }}>
        {Object.keys(data[0].languages).map((key, index) => {
          return <li key={index}>{data[0].languages[key]}</li>;
        })}
      </div>

      <img
        style={{ marginTop: "1rem" }}
        src={data[0].flags.png}
        alt="flag"
      ></img>
    </div>
  );
};

export default SingleCountry;
