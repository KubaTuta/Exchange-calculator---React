import React, { useEffect } from "react";
import Form from "./Form";
import Container from "./Container";
import { useState } from "react";

function App() {

const [apiData, setApiData] = useState([
  {
    currency: "PLN",
    mid: 1,
  },
  {
    currency: "EUR",
    mid: 4.5,
  },
  {
    currency: "GBP",
    mid: 5,
  },
  {
    currency: "HRK",
    mid: 0.625,
  },
]);

const fetchingData = () => {
  fetch("https://api.nbp.pl/api/exchangerates/tables/A/today/?format=json")
    .then(response => response.json())
    .then(rates => setApiData(rates[0].rates))
    .catch(error => console.error("coś się nie wczytało", error)); 
};

useEffect(() => fetchingData, []);

console.log("to są nowe dane", apiData);

  


  return (
    <Container className="container">
      <Form apiData={apiData}/>
    </Container>
  );
}

export default App;
