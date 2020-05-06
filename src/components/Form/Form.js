import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Form.module.scss";

const Form = ({ addItem }) => (
  <div className={styles.wrapper}>
    <Title> Add new twitter acccount </Title>
    <form onSubmit={addItem} className={styles.form} autoComplete="off">
      <Input name="image" label="image" required={false} />
      <Input name="name" label="name" />
      <Input name="link" label="link" />
      <Input tag="textarea" name="description" label="description" />
      <Button>add new item</Button>
    </form>
  </div>
);

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
