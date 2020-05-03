import React from "react";
import "./ListWrapper.css";
import PropTypes from "prop-types";
import ListItem from "./ListItem/ListItem";

const ListWrapper = ({ items }) => (
  <ul className="listWrapper__wrapper">
    {items.map((item) => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

ListWrapper.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListWrapper;
