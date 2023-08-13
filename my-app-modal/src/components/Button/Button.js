import React, { useState } from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import "./Button.scss"


const Button = ({ buttonText, handleButtonClick }) => {
  
  return (
    <>
      <button className="add-cart" onClick={handleButtonClick}>{buttonText}</button>
    </>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Button;