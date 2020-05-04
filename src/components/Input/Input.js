import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, placeholder, required }) => (
  <Tag
    type="text"
    placeholder={placeholder}
    name={name}
    id={name}
    className={Tag === "input" ? styles.formInput : styles.formTextarea}
    required={required}
  />
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  tag: "input",
  required: true,
};

export default Input;
