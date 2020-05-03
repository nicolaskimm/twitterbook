import React from "react";
import "./index.css";
import ListWrapper from "./components/ListWrapper/ListWrapper";

const initialState = [
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Dan Abramov",
    description: "I didn’t make @reactjs",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Ryan Florence",
    description:
      "Making web development fun and awesome with @remix_run, @reacttraining, React Router, and Reach UI",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Michael Jackson",
    description:
      "Building @remix_run, @ReactTraining and @unpkg. Father of 2 sons, 2 daughters. Speaker, writer.",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image:
      "https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images-medium-5/frenzy-wladyslaw-podkowinski.jpg",
    name: "Michael C. Doods",
    description:
      "Improving the world w/ quality software · Husband, Father, Latter-day Saint, Teacher, OSS",
    twitterLink: "https://twitter.com/kentcdodds",
  },
];

class App extends React.Component {
  state = {
    items: [...initialState],
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
      </div>
    );
  }
}

export default App;
