import styled from "styled-components";
import background from "../money.jpg";

export const Main = styled.main`
  background-position: center;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
`;