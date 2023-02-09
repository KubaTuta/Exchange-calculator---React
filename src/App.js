import React from "react";
import Form from "./Form";
import Container from "./Container";
import Loading from "./Loading";
import { useApi } from "./useApi";

function App() {

  const { apiData, todaysDate, isPending } = useApi();

  return (
    <Container className="container">
      {isPending && <Loading />}
      {apiData && <Form apiData={apiData} isPending={isPending} todaysDate={todaysDate} />}
    </Container>
  );
}

export default App;
