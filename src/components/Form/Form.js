import React from "react";
import AppContext from "../../context/context";
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
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { activeOption } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title> Add new {descriptions[activeOption]} </Title>
            <form onSubmit={context.addItem} className={styles.form} autoComplete="off">
              <div className={styles.formOptions}>
                <FormRadioInput
                  id={types.twitter}
                  checked={activeOption === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </FormRadioInput>
                <FormRadioInput
                  id={types.article}
                  checked={activeOption === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </FormRadioInput>
                <FormRadioInput
                  id={types.note}
                  checked={activeOption === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </FormRadioInput>
              </div>
              {activeOption !== types.twitter ? null : (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="image"
                  required={false}
                />
              )}
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={activeOption === types.twitter ? "twitter name" : "title"}
              />
              {activeOption !== types.note ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={activeOption === types.twitter ? "twitter link" : "link"}
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
