import React, { useState } from "react";
import Buttons from "../Buttons";
import Answer from "../Answer";
import Input from "../Input";
import DateAndTime from "./Date";
import { Div, StyledForm, Fieldset, Legend, Label } from "./styled";

const Form = ({ apiData }) => {

  const [currencyIn, setCurrencyIn] = useState(apiData[0].currency);
  const [currencyOut, setCurrencyOut] = useState(apiData[0].currency);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);
  const [presentCurrency, setPresentCurrency] = useState("");
  const rateIn = apiData.find(({ currency }) => currency === currencyIn);
  const rateOut = apiData.find(({ currency }) => currency === currencyOut);

  const calculateResult = (rateIn, rateOut, amount) => {
    return (rateIn.bid / rateOut.bid) * amount
  };

  const printResult = () => {
    if (result !== 0) {
      return `${result.toFixed(2)} ${presentCurrency}`;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Div>
      <StyledForm
        onSubmit={onSubmit}
      >
        <Fieldset>
          <Legend>
            Kalkulator walut
          </Legend>
          <DateAndTime />
          <label>Wybierz pary walut</label>
          <p>
            <Label>Posiadana</Label>
          </p>
          <p>
            <select
              value={currencyIn}
              onChange={({ target }) => setCurrencyIn(target.value)}
            >
              {apiData.map(money => (
                <option key={money.currency}>
                  {money.currency}
                </option>
              ))}
            </select>
          </p>
          <Label>Pożądana</Label>
          <p>
            <select
              value={currencyOut}
              onChange={({ target }) => setCurrencyOut(target.value)}
            >
              {apiData.map(money => (
                <option key={money.currency}>
                  {money.currency}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>Wpisz ilość posiadanej waluty:</label>
          </p>
          <Input
            amount={amount}
            setAmount={setAmount}
          />
          <Buttons
            calculateResult={calculateResult}
            setResult={setResult}
            setPresentCurrency={setPresentCurrency}
            setAmount={setAmount}
            setCurrencyIn={setCurrencyIn}
            setCurrencyOut={setCurrencyOut}
            rateIn={rateIn}
            rateOut={rateOut}
            amount={amount}
            currencyOut={currencyOut}
          />
          <Answer
            printResult={printResult}
            result={result}
            presentCurrency={presentCurrency}
          />
        </Fieldset>
      </StyledForm>
    </Div>
  );
}
export default Form;
