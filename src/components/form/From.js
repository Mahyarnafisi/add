import React from "react";

import "../../style/form/Form.css";

import { BsPlus } from "react-icons/bs";
const Form = () => {
  return (
    <form className="form">
      <input type="text" className="form__input" placeholder="What is in your mind?" />
      <button type="submit" className="form__btn--submit hover">
        <BsPlus className="btn-icon" />
      </button>
    </form>
  );
};
export default Form;
