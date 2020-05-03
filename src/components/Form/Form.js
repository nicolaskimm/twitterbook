import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ addItem }) => (
  <form onSubmit={addItem}>
    <input placeholder="image" name="image" />
    <input placeholder="name" name="name" />
    <textarea placeholder="description" name="description" />
    <input placeholder="link" name="link" />
    <button type="submit"> add new item </button>
  </form>
);

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
