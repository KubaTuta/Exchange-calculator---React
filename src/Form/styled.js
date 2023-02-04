import styled from "styled-components";

export const Div = styled.div`
    flex-basis: 700px;
    justify-content: center;
    align-items: center;
`;

export const StyledForm = styled.form`
    overflow-x: auto;
    text-align: center;
`;

export const Fieldset = styled.fieldset`
    margin: 10px auto;
    background: rgba(255, 255, 255, 0.53);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(28, 61, 64, 1);
`;

export const Legend = styled.legend`
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #8dadc3;
`;

export const Label = styled.label`
    display: inline-block;
    margin-right: 5px;
`;