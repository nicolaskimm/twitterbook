import React from "react";
import styles from "./FormRadioInput.module.scss";

const FormRadioInput = ({ id, checked, changeFn, children }) => (
  <label className={styles.radio}>
    <input id={id} type="radio" checked={checked} onChange={changeFn} />
    <div className={styles.radioButton} />
    {children}
  </label>
);

export default FormRadioInput;
