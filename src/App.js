import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import MyCard from "./Components/MaCard";
import MapPosition from "./Components/MapPosition";
// import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  const { REACT_APP_ACCESS_TOKEN: apiKey } = process.env;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
  const [receivedData, setReceivedData] = useState({});
  const [statusLoading, setStatusLoading] = useState(true);

  const errorHandler = (error) => {
    console.log(`Error Message: ${error.message}`); 
    alert(`Error Message: ${error.message}`);
    // ToDo: does not actual handle the error
    // ToDo: redirect to error-page
  };

  useEffect(() => {
    fetch(url)
    // fetch("./mockdata.json")
      .then(
        (res) => {
          console.log({ responseStatus: res.status });
          if (!res.ok)
            throw new Error(`An error has occured. HTTP code: ${res.status}`);
          return res.json();
        }, errorHandler)
      .then(
        (data) => {
          setReceivedData(data);
          setStatusLoading(false);
        })
      .catch(errorHandler);
  
  }, [url, statusLoading]);

return (
  <div className="App">
    <Container maxWidth="sm">
      {receivedData && <MyCard {...receivedData} status={statusLoading} />}
      {receivedData && <MapPosition locationLat={receivedData.location?.lat} locationLng={receivedData.location?.lng} />}
    </Container>
  </div>
);
}
