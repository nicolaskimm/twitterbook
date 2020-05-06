import React from "react";
import styles from "./List.module.scss";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ items }) => (
  <ul className={styles.wrapper}>
    {items.map((item) => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
