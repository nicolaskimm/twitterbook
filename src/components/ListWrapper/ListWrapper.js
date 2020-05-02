import React from "react";
import "./ListWrapper.css";
import ListItem from "./ListItem/ListItem";

const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    <ListItem />
    <ListItem />
    <ListItem />
  </ul>
);

export default ListWrapper;
