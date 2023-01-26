import React from "react";
import "./style.css";

const Form = ({ answer, buttons, input }) => (
  <div className="flex">
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut
        </legend>
        <label>Wybierz pary walut</label>
        <p>
          <label className="form__label">Posiadana</label>
        </p>

        <p>
          <select className="form__currencyFrom">
            <option className="form__pln">PLN</option>
            <option className="form__eur">EUR</option>
            <option className="form__gbp">GBP</option>
            <option className="form__hrk">HRK</option>
          </select>
        </p>

        <label className="form__label">Pożądana</label>
        <p>
          <select className="form__currencyTo">
            <option className="form__eur">EUR</option>
            <option className="form__gbp">GBP</option>
            <option className="form__hrk">HRK</option>
            <option className="form__pln">PLN</option>
          </select>
        </p>
        <p>
          <label>Wpisz ilość posiadanej waluty:</label>
        </p>
        {input}
        {buttons}
        {answer}
      </fieldset>
    </form>
  </div>

);

export default Form;
