import React from "react";
import Form from "./Form";
import Container from "./Container";
import Loading from "./Loading";
import { useEffect, useState } from "react";


function App() {

  const [apiData, setApiData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchingData = () => {
      fetch("https://api.nbp.pl/api/exchangerates/tabes/A/?format=json"
      ).then(response => {
        if (!response.ok) {
          throw new Error("coś się popsuło")
        }
        return response.json()
      }
      ).then(rates => { setApiData(rates[0].rates); setIsPending(false) }
      ).catch((error) => {
        console.log(error.message);
        console.log(error)
      });
    };

    setTimeout(fetchingData, 1000);
  },
    []
  );

  return (
    <Container className="container">
      {isPending && <Loading />}
      {apiData && <Form apiData={apiData} isPending={isPending} />}
    </Container>
  );
}

export default App;
