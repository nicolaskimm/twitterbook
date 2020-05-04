import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, name, description, link }) => (
  <li className={styles.wrapper}>
    <img src={image} alt={name} className={styles.image} />
    <div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <a className={styles.button} href={link} target="_blank" rel="noopener noreferrer">
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
};

export default ListItem;
