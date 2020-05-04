import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import styles from "./Form.module.scss";

const Form = ({ addItem }) => (
  <div className={styles.wrapper}>
    <h3> Add new twitter acccount </h3>
    <form onSubmit={addItem} className={styles.form} autoComplete="off">
      <Input name="image" placeholder="image" required={false} />
      <Input name="name" placeholder="name" />
      <Input name="link" placeholder="link" />
      <Input tag="textarea" name="description" placeholder="description" />
      <button type="submit" className={styles.formButton}>
        add new item
      </button>
    </form>
  </div>
);

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
