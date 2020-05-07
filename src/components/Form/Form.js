import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Form.module.scss";
import FormRadioInput from "./FormRadioInput";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favorite twitter account",
  article: "Article",
  note: "Note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Title> Add new {descriptions[this.state.activeOption]} </Title>
        <form onSubmit={this.props.addItem} className={styles.form} autoComplete="off">
          <div className={styles.formOptions}>
            <FormRadioInput
              id={types.twitter}
              checked={this.state.activeOption === types.twitter}
              changeFn={() => this.handleRadioButtonChange(types.twitter)}
            >
              Twitter
            </FormRadioInput>
            <FormRadioInput
              id={types.article}
              checked={this.state.activeOption === types.article}
              changeFn={() => this.handleRadioButtonChange(types.article)}
            >
              Article
            </FormRadioInput>
            <FormRadioInput
              id={types.note}
              checked={this.state.activeOption === types.note}
              changeFn={() => this.handleRadioButtonChange(types.note)}
            >
              Note
            </FormRadioInput>
          </div>

          <Input name="image" label="image" required={false} />
          <Input name="name" label="name" />
          <Input name="link" label="link" />
          <Input tag="textarea" name="description" label="description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
