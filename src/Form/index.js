import React, { useState } from "react";
import "./style.css";
import { currenciesIn } from "../currencies";
import { currenciesOut } from "../currencies";

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
    <div className="flex">
      <form
        className="form"
        onSubmit={onSubmit}
      >
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Kalkulator walut
          </legend>
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
          <p>
            <input
              min="0"
              className="form__amount"
              type="number"
              required
              placeholder="wpisz wartość"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </p>
          <p>
            <button
              type="submit"
              className="form__button"
              onClick={() => { setResult(() => calculateResult(rateIn, rateOut, amount)); setPresentCurrency(() => currencyOut) }}
            >
              Oblicz
            </button>
            <button
              type="reset"
              className="form__button"
              onClick={() => { setResult(() => 0); setAmount(() => ""); setCurrencyIn(() => currenciesIn[0].name); setCurrencyOut(() => currenciesOut[0].name) }}
            >
              Wyczyść
            </button>
          </p>
          <p>
            Otrzymasz&nbsp;
            <strong className="form__result">
              {printResult()}
            </strong>
            <span className="form__answer">
            </span>
          </p>
        </fieldset>
      </form>
    </div>

  );
}
export default Form;
