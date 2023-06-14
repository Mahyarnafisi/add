import React, { useState } from "react";

import "../../style/form/Form.css";

import { BsPlus } from "react-icons/bs";
const Form = () => {
  const [randomColor, setRandomColor] = useState("");

  const randomNumber = Math.trunc(Math.random() * 2);
  const arrayColor = ["#fdbf11", "#6c56c2", "#ff7191"];

  const ColorPickHandler = (event) => {
    event.preventDefault();
    setRandomColor(() => {
      setRandomColor(arrayColor[randomNumber]);
    });
    console.log(randomColor);
  };

  return (
    <form className="form" onSubmit={ColorPickHandler}>
      <input type="text" className="form__input" placeholder="What is in your mind?" />
      <button type="submit" className="form__btn--submit hover">
        <BsPlus className="btn-icon" />
      </button>
    </form>
  );
};
export default Form;
