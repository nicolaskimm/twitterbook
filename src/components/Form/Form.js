import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";

const Form = ({ addItem }) => (
  <div className={styles.wrapper}>
    <h3> Add new twitter acccount </h3>
    <form onSubmit={addItem} className={styles.form}>
      <input type="text" placeholder="image" name="image" id="image" className={styles.formInput} />
      <input type="text" placeholder="name" name="name" id="name" className={styles.formInput} />
      <textarea
        placeholder="description"
        name="description"
        id="description"
        className={styles.formTextarea}
      />
      <input type="text" placeholder="link" name="link" className={styles.formInput} id="link" />
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