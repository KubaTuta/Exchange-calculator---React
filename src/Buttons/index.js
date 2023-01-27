import "./style.css";
import { currenciesIn, currenciesOut } from "../currencies";

const Buttons =
  ({ rateIn, rateOut, amount, currencyOut, setResult, calculateResult, setPresentCurrency, setAmount, setCurrencyIn, setCurrencyOut }) => (
    <p className="buttons">
      <button
        type="submit"
        className="buttons__button"
        onClick={() => {
          setResult(() => calculateResult(rateIn, rateOut, amount));
          setPresentCurrency(() => currencyOut)
        }}
      >
        Oblicz
      </button>
      <button
        type="reset"
        className="buttons__button"
        onClick={() => {
          setResult(() => 0); 
          setAmount(() => "");
          setCurrencyIn(() => currenciesIn[0].name);
          setCurrencyOut(() => currenciesOut[0].name)
        }}
      >
        Wyczyść
      </button>
    </p>
  );

export default Buttons;