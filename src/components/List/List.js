import React from "react";
import styles from "./List.module.scss";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map((item) => (
          <ListItem key={item.name} {...item} />
        ))}
      </ul>
    ) : (
      <h2 className={styles.noItems}> There's nothing here, add your first item! </h2>
    )}
  </>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
