import React from "react";
import "./style.css";

const Buttons = (props) => (
    <p>
        <button type="submit" className="form__button">Oblicz</button>
        <button type="reset" className="form__button">Wyczyść</button>
    </p>
);

export default Buttons;