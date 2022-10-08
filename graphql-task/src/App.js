import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const results = await axios.post(`https://api.spacex.land/graphql/`, {
      query: `{
        rockets {
          company
          id
          name
          height {
            meters
          }
          
          wikipedia
        }
      }`,
    });
    console.log(results.data.data.rockets);
    setApiData(results.data.data.rockets);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Space X rockets</h1>

      {apiData.map((rocket) => (
        <>
          <h2>Name: {rocket.name} </h2>
          <p>Company: {rocket.company} </p>
          <p>Height: {rocket.height.meters} metres </p>
        </>
      ))}
    </>
  );
};
export default App;
