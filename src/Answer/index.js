const Answer = ({printResult, result, presentCurrency}) => (
    <p>
    Otrzymasz&nbsp;
    <strong>
      {printResult(result, presentCurrency)}
    </strong>
    <span>
    </span>
  </p>
);
export default Answer;