import React from "react";
import Buttons from "./Buttons";
import Answer from "./Answer";
import Input from "./Input";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <Container className="container">
      <Form
        input={<Input />}
        buttons={<Buttons />}
        answer={<Answer />} />
    </Container>
  );
}

export default App;
