
import { currenciesIn, currenciesOut } from "../currencies";
import { Button } from "./styled";

const Buttons =
  ({ rateIn, rateOut, amount, currencyOut, setResult, calculateResult, setPresentCurrency, setAmount, setCurrencyIn, setCurrencyOut }) => (
    <p>
      <Button
        type="submit"
        onClick={() => {
          setResult(() => calculateResult(rateIn, rateOut, amount));
          setPresentCurrency(() => currencyOut)
        }}
      >
        Oblicz
      </Button>
      <Button
        type="reset"
        onClick={() => {
          setResult(() => 0); 
          setAmount(() => "");
          setCurrencyIn(() => currenciesIn[0].name);
          setCurrencyOut(() => currenciesOut[0].name)
        }}
      >
        Wyczyść
      </Button>
    </p>
  );

export default Buttons;