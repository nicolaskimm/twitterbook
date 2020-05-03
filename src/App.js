import React from "react";
import "./index.css";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import Form from "./components/Form/Form";

const initialStateItems = [
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Dan Abramov",
    description: "I didn’t make @reactjs",
    link: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Ryan Florence",
    description:
      "Making web development fun and awesome with @remix_run, @reacttraining, React Router, and Reach UI",
    link: "https://twitter.com/ryanflorence",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Michael Jackson",
    description:
      "Building @remix_run, @ReactTraining and @unpkg. Father of 2 sons, 2 daughters. Speaker, writer.",
    link: "https://twitter.com/mjackson",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Michael C. Doods",
    description:
      "Improving the world w/ quality software · Husband, Father, Latter-day Saint, Teacher, OSS",
    link: "https://twitter.com/kentcdodds",
  },
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      image: e.target[0].value,
      name: e.target[1].value,
      description: e.target[2].value,
      link: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
