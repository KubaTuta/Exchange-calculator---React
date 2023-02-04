import styled from "styled-components";

export const Button = styled.button`
    background-color: #8dadc3;
    border: none;
    border-radius: 3px;
    width: 49%;
    margin: 1px;
    transition: 1s;

    @media(min-width: 500px) {
        min-width: 100%;
    }
    &:hover {
        background-color: #89cef96b;
        cursor: pointer;
    }
`;