import React, { useState } from "react";

import styles from "../../style/form/Form.module.css";

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
    const newDataObject = {
      id: (Math.random() * 100 + Math.random() * 100).toFixed(3),
      title: enteredTitle,
      date: new Date(),
      number: props.initiateData.length + 1,
      bgColor: arrayColor[randomNumber],
      tagColor: arrayColor[randomNumber],
    };
    props.newDataClimbUp(newDataObject);
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
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <input className={`${styles.form__input} ${!isValid && "invalid"} `} type="text" placeholder={`${!isValid ? "You need to write here!" : "What is in your mind?"}`} onChange={inputChangeHandler} />
      <button type="submit" className={`${styles["form__btn--submit"]} hover`}>
        <BsPlus className={`btn-icon`} />
      </button>
    </form>
  );
};
export default Form;
