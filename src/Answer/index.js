const Answer = ({ result, presentCurrency }) => {
  const printResult = () => {
    if (result !== 0) {
      return `${result.toFixed(2)} ${presentCurrency}`;
    }
  };
  return (
    <p>
      Otrzymasz&nbsp;
      <strong>
        {printResult(result, presentCurrency)}
      </strong>
      <span>
      </span>
    </p>
  );
}

export default Answer;