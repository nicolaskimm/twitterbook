import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context/context";
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  state = {
    items: {
      twitters: [],
      articles: [],
      notes: [],
    },
    isModalOpen: true,
  };

  addItem = (e) => {
    e.preventDefault();

    console.log("it works");

    // const newItem = {
    //   image: e.target[0].value,
    //   name: e.target[1].value,
    //   description: e.target[2].value,
    //   link: e.target[3].value,
    // };

    // this.setState((prevState) => ({
    //   items: [...prevState.items, newItem],
    // }));

    // e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = { ...this.state, addItem: this.addItem };

    return (
      <div>
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Header openModalFn={this.openModal} />
            <h1> hello world </h1>
            <Switch>
              <Route exact path="/" component={TwittersView} />
              <Route path="/articles" component={ArticlesView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </AppContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
