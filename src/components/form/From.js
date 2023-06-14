import React, { useState } from "react";

import "../../style/form/Form.css";

import { BsPlus } from "react-icons/bs";
const Form = (props) => {
  const [randomColor, setRandomColor] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  // function of random color picker ----------------------
  const randomNumber = Math.trunc(Math.random() * 2);
  const arrayColor = ["#fdbf11", "#6c56c2", "#ff7191"];

  const ColorPickHandler = (event) => {
    event.preventDefault();
    setRandomColor(() => {
      setRandomColor(arrayColor[randomNumber]);
    });
    const newData = {
      id: (Math.random() * 100 + Math.random() * 50).toFixed(3),
      title: enteredTitle,
      date: new Date(),
      tagColor: randomColor,
      bgColor: randomColor,
    };
    props.newDataClimbUp(newData);
  };

  // Function Input
  const inputChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  return (
    <form className="form" onSubmit={ColorPickHandler}>
      <input type="text" className="form__input" placeholder="What is in your mind?" onChange={inputChangeHandler} />
      <button type="submit" className="form__btn--submit hover">
        <BsPlus className="btn-icon" />
      </button>
    </form>
  );
};
export default Form;
