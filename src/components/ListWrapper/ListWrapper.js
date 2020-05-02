import React from "react";
import "./ListWrapper.css";
import { twitterAcounts } from "../../data/twitterAcounts";
import ListItem from "./ListItem/ListItem";

const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {twitterAcounts.map((item) => (
      <ListItem {...item} />
    ))}
  </ul>
);

export default ListWrapper;
