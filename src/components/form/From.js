import React, { useState } from "react";

import "../../style/form/Form.css";

import { BsPlus } from "react-icons/bs";
const Form = (props) => {
  const [randomColor, setRandomColor] = useState("#ff7191");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isValid, setIsValid] = useState(true);
  // function of random color picker ----------------------
  const randomNumber = Math.trunc(Math.random() * 2);
  const arrayColor = ["#fdbf11", "#6c56c2", "#ff7191"];

  // Function Input store in state
  const inputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(e.target.value);
  };

  // function to create new object to send up from inputs
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setIsValid(false);
    }

    // pick a random color
    // setRandomColor(() => {
    //   return arrayColor[randomNumber];
    // });
    // // create new object of data to send it up
    // const newObject = {
    //   id: (Math.random() * 100 + Math.random() * 50).toFixed(3),
    //   title: enteredTitle,
    //   date: new Date(),
    //   tagColor: randomColor,
    //   bgColor: randomColor,
    // };
    // props.newDataClimbUp(newObject);
  };

  return (
    <form className={`form`} onSubmit={onSubmitHandler}>
      <input className={`form__input ${!isValid ? "invalid" : ""}`} type="text" placeholder={`${!isValid ? "You need to write here!" : "What is in your mind?"}`} onChange={inputChangeHandler} />
      <button type="submit" className="form__btn--submit hover">
        <BsPlus className="btn-icon" />
      </button>
    </form>
  );
};
export default Form;
