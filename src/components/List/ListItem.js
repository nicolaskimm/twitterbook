import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, name, description, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        alt={name}
        className={ImageTag === "img" ? styles.image : styles.imageNone}
      />
      <div>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={link}>
          visit twitter page
        </Button>
      </div>
    </li>
  );
};

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
