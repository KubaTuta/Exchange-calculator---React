import React from "react";
import Form from "./Form";
import Container from "./Container";
import Loading from "./Loading";
import { useEffect, useState } from "react";


function App() {

  const [apiData, setApiData] = useState(null);
  const [todaysDate, setTodaysDate] = useState(null)
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchingData = () => {
      fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json"
      ).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json();
      }
      ).then(data => { setApiData(data[0].rates ); setTodaysDate(data[0].effectiveDate); setIsPending(false) }
      ).catch((error) => {
        console.error(error.message);
      });
    };
    
    setTimeout(fetchingData, 1000);
  },
    []
  );

  console.log(apiData);
  console.log(todaysDate);

  return (
    <Container className="container">
      {isPending && <Loading />}
      {apiData && <Form apiData={apiData} isPending={isPending} todaysDate={todaysDate}/>}
    </Container>
  );
}

export default App;
