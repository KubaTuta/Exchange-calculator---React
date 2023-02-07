import React, { useEffect } from "react";
import Form from "./Form";
import Container from "./Container";
import { useState } from "react";

function App() {

const [apiData, setApiData] = useState("loading");

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
