import React from "react";
import "./ListItem.css";
import DanAbramovImage from "../../../assets/images/DanAbramovImage.jpg";

const ListItem = () => (
  <li className="listItem__wrapper">
    <img src={DanAbramovImage} alt="Dan Abramov" className="listItem__image" />
    <div>
      <h2 className="listItem__name">Dan Abramov</h2>
      <p className="listItem__description">I didn’t make @reactjs</p>
      <a className="listItem__button" href="https://twitter.com/dan_abramov">
        visit twitter page
      </a>
    </div>
  </li>
);

export default ListItem;
