import React from "react";

const Input = ({amount, setAmount}) => (
    <p>
    <input
      min="0"
      type="number"
      required
      placeholder="wpisz wartość"
      value={amount}
      onChange={({ target }) => setAmount(target.value)}
    />
  </p>
);

export default Input;