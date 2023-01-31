import React, { useState } from "react";
import "./style.css";
import { currenciesIn } from "../currencies";
import { currenciesOut } from "../currencies";
import Buttons from "../Buttons";
import Answer from "../Answer";
import Input from "../Input";
import DateAndTime from "./Date";

const Form = () => {
  const [currencyIn, setCurrencyIn] = useState(currenciesIn[0].name);
  const [currencyOut, setCurrencyOut] = useState(currenciesOut[0].name);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);
  const [presentCurrency, setPresentCurrency] = useState("");
  const rateIn = currenciesIn.find(({ name }) => name === currencyIn).rate;
  const rateOut = currenciesOut.find(({ name }) => name === currencyOut).rate;
 


  const calculateResult = (rateIn, rateOut, amount) => {
    return (rateIn / rateOut) * amount
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
    <div className="form">
      <form
        className="form__main"
        onSubmit={onSubmit}
      >
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Kalkulator walut
          </legend>
         <DateAndTime />
          <label>Wybierz pary walut</label>
          <p>
            <label className="form__label">Posiadana</label>
          </p>
          <p>
            <select
              className="form__currencyFrom"
              value={currencyIn}
              onChange={({ target }) => setCurrencyIn(target.value)}
            >
              <option>PLN</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>HRK</option>
            </select>
          </p>
          <label className="form__label">Pożądana</label>
          <p>
            <select
              className="form__currencyTo"
              value={currencyOut}
              onChange={({ target }) => setCurrencyOut(target.value)}
            >
              <option>EUR</option>
              <option>GBP</option>
              <option>HRK</option>
              <option>PLN</option>
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
        </fieldset>
      </form>
    </div>
  );
}
export default Form;
