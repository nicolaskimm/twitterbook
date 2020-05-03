import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ addItem }) => (
  <div className="form__wrapper">
    <h3> Add new twitter acccount </h3>
    <form onSubmit={addItem} className="form__form">
      <input placeholder="image" name="image" className="form__input" />
      <input placeholder="name" name="name" className="form__input" />
      <textarea placeholder="description" name="description" className="form__textarea" />
      <input placeholder="link" name="link" className="form__input" />
      <button type="submit" className="form__button">
        {" "}
        add new item{" "}
      </button>
    </form>
  </div>
);

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
