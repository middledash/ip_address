import { Component, useEffect, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import MyCard from "./Components/MaCard";
import MapPosition from "./Components/MapPosition";
// import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  const { REACT_APP_ACCESS_TOKEN: apiKey } = process.env;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
  // let receivedData = {};
  const [receivedData, setReceivedData] = useState({});

  useEffect(() => {
    // fetch(url)
    fetch("./mockdata.json")
      .then(
        (res) => {
          console.log({ responseStatus: res.status });
          if (!res.ok)
            throw new Error(`An error has occured. HTTP code: ${res.status}`);
          return res.json();
        },
        (err) => console.log({ first: err.message })
      )
      .then((data) => setReceivedData(data))
      .catch((error) => console.log({ second: error.message }));
  }, [url]);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <MyCard {...receivedData} />
        {receivedData.location && <MapPosition locationLat={receivedData.location.lat} locationLng={receivedData.location.lng} />}
      </Container>
    </div>
  );
}
