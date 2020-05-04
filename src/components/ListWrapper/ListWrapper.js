import React from "react";
import styles from "./ListWrapper.module.scss";
import PropTypes from "prop-types";
import ListItem from "./ListItem/ListItem";

const ListWrapper = ({ items }) => (
  <ul className={styles.wrapper}>
    {items.map((item) => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

ListWrapper.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListWrapper;
